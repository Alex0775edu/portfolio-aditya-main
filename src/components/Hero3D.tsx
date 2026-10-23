import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sounds } from '../utils/soundEffects';

export interface OrbitalNodeData {
  id: string;
  name: string;
  category: string;
  color: string;
  hexColor: number;
  description: string;
  actionText: string;
  linkSection: string;
}

export const ORBITAL_NODES: OrbitalNodeData[] = [
  {
    id: 'skillsum-platform',
    name: 'SkillSum Innovations',
    category: 'Brand Platform',
    color: '#10b981',
    hexColor: 0x10b981,
    description: 'Official tech & digital services brand portal founded by Aditya.',
    actionText: 'Explore SkillSum',
    linkSection: '#skillsum'
  },
  {
    id: 'ems-system',
    name: 'Education Management (EMS)',
    category: 'Management System',
    color: '#00f0ff',
    hexColor: 0x00f0ff,
    description: 'Relational database platform for courses, notes, and records.',
    actionText: 'Inspect EMS',
    linkSection: '#projects'
  },
  {
    id: 'student-internship-system',
    name: 'Student Internship System',
    category: 'Web Application',
    color: '#3b82f6',
    hexColor: 0x3b82f6,
    description: 'End-to-end portal for managing applications & real-time status.',
    actionText: 'View System',
    linkSection: '#projects'
  },
  {
    id: 'attendance-management-system',
    name: 'Attendance Management',
    category: 'Management System',
    color: '#a855f7',
    hexColor: 0xa855f7,
    description: 'Rapid attendance logging and structured analytics dashboard.',
    actionText: 'View Dashboard',
    linkSection: '#projects'
  }
];

interface Hero3DProps {
  onSelectNode?: (node: OrbitalNodeData) => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onSelectNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<OrbitalNodeData | null>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    const container = containerRef.current;
    if (!container) return;

    // Detect WebGL capability safely
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for core and orbits
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Abstract Core
    const coreGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Inner Glowing Nucleus
    const innerGeo = new THREE.SphereGeometry(0.9, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 2. Orbital Track Ring
    const orbitTrackGeo = new THREE.TorusGeometry(2.8, 0.015, 16, 120);
    const orbitTrackMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25
    });
    const orbitTrack = new THREE.Mesh(orbitTrackGeo, orbitTrackMat);
    orbitTrack.rotation.x = Math.PI / 2.6;
    mainGroup.add(orbitTrack);

    const orbitTrack2Geo = new THREE.TorusGeometry(3.3, 0.01, 16, 120);
    const orbitTrack2Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.2
    });
    const orbitTrack2 = new THREE.Mesh(orbitTrack2Geo, orbitTrack2Mat);
    orbitTrack2.rotation.y = Math.PI / 4;
    orbitTrack2.rotation.x = -Math.PI / 3;
    mainGroup.add(orbitTrack2);

    // 3. Four Interactive Project Nodes in Orbit
    const nodeMeshes: { mesh: THREE.Mesh; data: OrbitalNodeData; baseAngle: number; radius: number }[] = [];
    const interactiveObjects: THREE.Object3D[] = [];

    ORBITAL_NODES.forEach((node, i) => {
      const radius = i % 2 === 0 ? 2.8 : 3.3;
      const baseAngle = (i * Math.PI) / 2;

      // Node mesh
      const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: node.hexColor,
        transparent: true,
        opacity: 0.95
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);

      // Node Aura Ring
      const auraGeo = new THREE.RingGeometry(0.24, 0.32, 24);
      const auraMat = new THREE.MeshBasicMaterial({
        color: node.hexColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const auraMesh = new THREE.Mesh(auraGeo, auraMat);
      nodeMesh.add(auraMesh);

      // Metadata for raycasting
      nodeMesh.userData = { nodeData: node };

      mainGroup.add(nodeMesh);
      nodeMeshes.push({ mesh: nodeMesh, data: node, baseAngle, radius });
      interactiveObjects.push(nodeMesh);
    });

    // 4. Particle Constellation (adapt for mobile)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 120 : 260;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorEmerald = new THREE.Color(0x10b981);
    const colorBlue = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      const r = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const c = i % 3 === 0 ? colorCyan : i % 3 === 1 ? colorEmerald : colorBlue;
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Raycasting & Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.x = x;
      mouse.y = y;
      targetRotY = x * 0.5;
      targetRotX = -y * 0.5;

      // Check intersections
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const nodeData = hit.userData.nodeData as OrbitalNodeData;
        if (nodeData) {
          setActiveNode(nodeData);
          container.style.cursor = 'pointer';
          sounds.playHover();
        }
      } else {
        container.style.cursor = 'default';
      }
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects, false);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const nodeData = hit.userData.nodeData as OrbitalNodeData;
        if (nodeData) {
          setActiveNode(nodeData);
          sounds.playClick();
          if (onSelectNode) onSelectNode(nodeData);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('click', handleClick);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!mediaQuery.matches) {
        // Damped camera/group rotation
        mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.05 + delta * 0.12;
        mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.05 + delta * 0.06;

        coreMesh.rotation.y += delta * 0.2;
        coreMesh.rotation.z += delta * 0.1;
        particles.rotation.y = time * 0.04;

        // Animate orbital nodes along their paths
        nodeMeshes.forEach((item, idx) => {
          const speed = idx % 2 === 0 ? 0.35 : -0.3;
          const currentAngle = item.baseAngle + time * speed;
          
          if (idx % 2 === 0) {
            item.mesh.position.x = Math.cos(currentAngle) * item.radius;
            item.mesh.position.z = Math.sin(currentAngle) * item.radius;
            item.mesh.position.y = Math.sin(time * 0.8 + idx) * 0.4;
          } else {
            item.mesh.position.x = Math.cos(currentAngle) * (item.radius * 0.9);
            item.mesh.position.y = Math.sin(currentAngle) * (item.radius * 0.85);
            item.mesh.position.z = Math.cos(time * 0.5 + idx) * 0.8;
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      mediaQuery.removeEventListener('change', handleMotionChange);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      orbitTrackGeo.dispose();
      orbitTrackMat.dispose();
      orbitTrack2Geo.dispose();
      orbitTrack2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onSelectNode]);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full min-h-[380px] sm:min-h-[460px] relative z-10"
        aria-label="Interactive 3D Technology Core and Project Nodes"
        role="img"
      />

      {/* Floating Node Active HUD Card (appears on hover/click) */}
      {activeNode && (
        <div className="absolute top-4 left-4 right-4 sm:left-auto sm:right-4 z-30 p-4 rounded-2xl bg-[#081024]/95 border border-cyan-500/40 backdrop-blur-xl shadow-2xl max-w-xs animate-fade-in text-left space-y-2">
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${activeNode.color}25`, color: activeNode.color }}
            >
              {activeNode.category}
            </span>
            <button
              onClick={() => setActiveNode(null)}
              className="text-slate-400 hover:text-white text-xs p-1"
              aria-label="Dismiss node card"
            >
              ✕
            </button>
          </div>

          <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: activeNode.color }}
            />
            <span>{activeNode.name}</span>
          </h4>

          <p className="text-xs text-slate-300 leading-relaxed">
            {activeNode.description}
          </p>

          <div className="pt-1 flex items-center gap-2">
            <a
              href={activeNode.linkSection}
              onClick={() => {
                sounds.playClick();
                if (onSelectNode) onSelectNode(activeNode);
              }}
              className="w-full py-1.5 px-3 rounded-lg text-xs font-mono font-bold text-black text-center transition-transform active:scale-95 shadow-sm"
              style={{ backgroundColor: activeNode.color }}
            >
              {activeNode.actionText} →
            </a>
          </div>
        </div>
      )}

      {/* Accessible Interactive Orbit Nodes Bar (Allows one-touch or keyboard navigation) */}
      <div className="absolute -bottom-10 left-0 right-0 z-20 flex flex-wrap items-center justify-center gap-1.5 px-2">
        {ORBITAL_NODES.map((node) => {
          const isSelected = activeNode?.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => {
                setActiveNode(node);
                sounds.playClick();
                if (onSelectNode) onSelectNode(node);
              }}
              onMouseEnter={() => {
                sounds.playHover();
                setActiveNode(node);
              }}
              className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold transition-all duration-200 border flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-slate-900 border-white text-white shadow-lg scale-105'
                  : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
              <span>{node.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
