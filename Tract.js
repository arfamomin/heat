import * as THREE from 'three';

export class Tract {
    constructor({ tractCode, shapes, mapGroup }) {
        this.tractCode = tractCode;
        this.shapes = shapes; // THREE.Shape[]
        this.mapGroup = mapGroup;
        this.currentZ = 0;
        this._renderOrder = 1;

        // All meshes and lines accumulated across base + every layer.
        // Used for raycasting and opacity changes.
        this.allMeshes = [];
        this.allLines = [];
    }

    _extrude(depth, material, lineMaterial) {
        const meshes = [];
        const lines = [];

        this.shapes.forEach(shape => {
            const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });

            const mesh = new THREE.Mesh(geo, material);
            mesh.position.z = this.currentZ;
            mesh.renderOrder = this._renderOrder;
            mesh.userData.tractCode = this.tractCode;
            this.mapGroup.add(mesh);
            meshes.push(mesh);
            this.allMeshes.push(mesh);

            const edges = new THREE.LineSegments(
                new THREE.EdgesGeometry(geo),
                lineMaterial
            );
            edges.position.z = this.currentZ;
            edges.renderOrder = this._renderOrder + 1;
            this.mapGroup.add(edges);
            lines.push(edges);
            this.allLines.push(edges);
        });

        this._renderOrder += 2;
        return { meshes, lines };
    }

    // Builds the flat base slab and sets currentZ to its top.
    buildBase(depth, material, lineMaterial) {
        const result = this._extrude(depth, material, lineMaterial);
        this.currentZ = depth;
        return result;
    }

    // Extrudes a new layer starting at currentZ and advances currentZ by depth.
    addLayer(depth, material, lineMaterial) {
        const result = this._extrude(depth, material, lineMaterial);
        this.currentZ += depth;
        return result;
    }

    // Sets opacity on all meshes and lines belonging to this tract.
    // Materials are cloned lazily on first call so shared instances are not affected.
    setOpacity(opacity) {
        const transparent = opacity < 1;
        const showLines = opacity === 1;

        this.allMeshes.forEach(mesh => {
            if (mesh.userData.layerHidden) return;
            if (!mesh.userData.ownsMaterial) {
                mesh.material = mesh.material.clone();
                mesh.userData.ownsMaterial = true;
            }
            mesh.material.transparent = transparent;
            mesh.material.opacity = opacity;
        });

        this.allLines.forEach(line => {
            if (line.userData.layerHidden) return;
            line.visible = showLines;
        });
    }
}
