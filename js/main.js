    // ─── Image / Photo ─────────────────────────────────────────────────────────
    // Your photo used for the center cube and as fallback art.
    const PHOTO_URL = 'assets/profile-photo.png';

    const CUBE_IMG_PROJECTS = 'assets/cube-projects.jpg';
    const CUBE_IMG_EXPERIENCE = 'assets/cube-experience.jpg';
    const CUBE_IMG_SKILLS = 'assets/cube-skills.jpg';
    const CUBE_IMG_CONTACT = 'assets/cube-contact.jpg';
    const CUBE_IMG_RESEARCH = 'assets/cube-research.jpg';
    const PHOTO1_URL = 'assets/welcome-photo.jpg';

    // ─── Section config (creative cube names + classic navbar names) ───────────
    const SECTIONS = [
      { id: 'home',       nav: 'HOME',       label: 'ORIGIN CORE',     emoji: '🧿', glow: '#48ff9e', base: 0x0f2b2a, x: 0,  z: 0,   shape: 'circle' },
      { id: 'about',      nav: 'ABOUT',      label: 'IDENTITY BAY',    emoji: '🧑‍🚀', glow: '#00e0ff', base: 0x0b2140, x: -14, z: 0,   shape: 'box' },
      { id: 'experience', nav: 'EXPERIENCE', label: 'MISSION LOGS',    emoji: '🧩', glow: '#ffb84a', base: 0x2a1b0a, x: -7,  z: -14, shape: 'box' },
      { id: 'skills',     nav: 'SKILLS',     label: 'SKILL MATRIX',    emoji: '🛠️', glow: '#8b5cff', base: 0x1a1030, x: 7,   z: -14, shape: 'box' },
      { id: 'projects',   nav: 'PROJECTS',   label: 'PROJECT GALLERY', emoji: '🗂️', glow: '#00ff88', base: 0x0a2a1a, x: 14,  z: 0,   shape: 'box' },
      { id: 'research',   nav: 'RESEARCH',   label: 'RESEARCH VAULT',  emoji: '🧠', glow: '#ff4ad9', base: 0x2a0a1a, x: 7,   z: 14,  shape: 'box' },
      { id: 'contact',    nav: 'CONTACT',    label: 'COMMS HUB',       emoji: '📡', glow: '#ffd24a', base: 0x2a2408, x: -7,  z: 14,  shape: 'box' },
    ];

    // ─── Portfolio Data ────────────────────────────────────────────────────────
    const portfolioData = {
      home: {
        content: `
          <h2>🧿 ORIGIN CORE</h2>
          <img src="assets/panel-divider.png" class="profile-photo-panel" alt="Manthan Jain" style="object-position:top center;">
          <h3 style="text-align:center;">Manthan Jain</h3>
          <p style="text-align:center;color:#48ff9e;font-size:15px;letter-spacing:0.06em;"><strong>AI/ML &amp; Game Developer</strong></p>
          <p style="text-align:center;color:rgba(200,255,240,0.75);font-size:13px;">Mumbai, Maharashtra, India</p>
          <hr style="border-color:rgba(72,255,158,0.35);margin:16px 0;">
          <p><strong>🎓 Education:</strong> B.E. in Computer Engineering — Vidyalankar Institute of Technology, Mumbai (2024–2028)</p>
          <p><strong>📊 GPA:</strong> 9.68 / 10 &nbsp;|&nbsp; <span style="color:#48ff9e;">Top Performer</span></p>
          <p><strong>🔬 Research Interests:</strong> Efficient ML Systems, Real-Time Systems Optimization, Algorithmic Efficiency, Computational Modeling, Scalable Distributed Systems</p>
          <hr style="border-color:rgba(72,255,158,0.25);margin:16px 0;">
          <p style="color:#a8fff0;font-size:12px;">Walk to any glowing cube and press <strong>E</strong> to enter it.</p>
          <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;">
            <button onclick="viewResume()" style="background:rgba(0,224,255,0.12);border:1px solid rgba(0,224,255,0.6);color:#00e0ff;font-family:'Orbitron',monospace;font-size:11px;padding:8px 14px;cursor:pointer;letter-spacing:0.06em;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">👁 VIEW RESUME</button>
            <button onclick="downloadResume()" style="background:rgba(255,45,155,0.12);border:1px solid rgba(255,45,155,0.6);color:#ff2d9b;font-family:'Orbitron',monospace;font-size:11px;padding:8px 14px;cursor:pointer;letter-spacing:0.06em;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">⬇ DOWNLOAD PDF</button>
          </div>
        `
      },
      about: {
        content: `
          <h2>🧑‍🚀 IDENTITY BAY</h2>
          <img src="assets/panel-divider.png" class="profile-photo-panel" alt="Manthan Jain" style="object-position:top center;width:180px;height:180px;">
          <h3>Professional Summary</h3>
          <p>High-achieving Computer Engineering student with a <strong>9.68/10 GPA</strong> and specialized focus on <strong>Artificial Intelligence and Real-Time Systems Optimization</strong>. Expertise in developing low-latency architectures in C++ and architecting end-to-end AI pipelines for facial analysis and recommendation systems.</p>
          <p>Proficient in leveraging mathematical foundations like <strong>Linear Algebra and Statistics</strong> to improve computational efficiency. Certified in <strong>Data Structures and Digital Image Processing</strong>.</p>
          <h3>Focus Areas</h3>
          <ul>
            <li>AI pipelines, computer vision, and performance optimization</li>
            <li>Real-time simulation, interactive systems, and applied ML</li>
            <li>Low-latency C++ architectures and system design</li>
          </ul>
          <h3>Relevant Coursework</h3>
          <div>
            <span class="tech-badge">Data Structures &amp; Algorithms</span>
            <span class="tech-badge">Operating Systems</span>
            <span class="tech-badge">Linear Algebra</span>
            <span class="tech-badge">Probability &amp; Statistics</span>
            <span class="tech-badge">Engineering Mathematics</span>
          </div>
        `
      },
      experience: {
        content: `
          <h2>🧩 MISSION LOGS</h2>
          <img src="assets/panel-divider.png" class="profile-photo-panel" alt="Manthan Jain" style="object-position:top center;">
          <h3>💼 Game Systems Development Intern</h3>
          <p><strong style="color:#48ff9e;">Cascade Tech</strong> &nbsp;|&nbsp; May 2025 – June 2025</p>
          <ul>
            <li>Designed and implemented low-latency event-driven systems in C++, focusing on computational efficiency and scalable architecture design.</li>
            <li>Developed and optimized physics-based collision detection algorithms, analyzing time complexity and improving real-time response accuracy.</li>
            <li>Enhanced runtime performance through memory profiling, bottleneck analysis, and algorithmic optimization within <strong>Unreal Engine</strong>.</li>
            <li>Engineered modular system components following version-controlled, collaborative development workflows using <strong>Git</strong>.</li>
            <li>Applied algorithmic modeling techniques to scoring and interaction logic, improving system responsiveness and deterministic behavior.</li>
          </ul>
          <div>
            <span class="tech-badge">C++</span>
            <span class="tech-badge">Unreal Engine</span>
            <span class="tech-badge">Physics Simulation</span>
            <span class="tech-badge">Memory Profiling</span>
            <span class="tech-badge">Git</span>
            <span class="tech-badge">Event-Driven Systems</span>
          </div>
        `
      },
      skills: {
        content: `
          <h2>🛠️ SKILL MATRIX</h2>
          <img src="assets/panel-divider.png" class="profile-photo-panel" alt="Manthan Jain" style="object-position:top center;">
          <h3>Core Languages</h3>
          <div class="skill-bars" id="skill-bars">
            <div class="skill-row"><span class="skill-name">C++</span><div class="skill-track"><div class="skill-fill" data-pct="92" style="--c:#00ffb3"></div></div></div>
            <div class="skill-row"><span class="skill-name">Python</span><div class="skill-track"><div class="skill-fill" data-pct="85" style="--c:#ff2d9b"></div></div></div>
            <div class="skill-row"><span class="skill-name">Java</span><div class="skill-track"><div class="skill-fill" data-pct="78" style="--c:#00e0ff"></div></div></div>
            <div class="skill-row"><span class="skill-name">C</span><div class="skill-track"><div class="skill-fill" data-pct="80" style="--c:#8b5cff"></div></div></div>
            <div class="skill-row"><span class="skill-name">JavaScript</span><div class="skill-track"><div class="skill-fill" data-pct="72" style="--c:#ffd24a"></div></div></div>
            <div class="skill-row"><span class="skill-name">HTML &amp; CSS</span><div class="skill-track"><div class="skill-fill" data-pct="75" style="--c:#ff7c4a"></div></div></div>
            <div class="skill-row"><span class="skill-name">Flutter</span><div class="skill-track"><div class="skill-fill" data-pct="68" style="--c:#54c5f8"></div></div></div>
            <div class="skill-row"><span class="skill-name">Node.js</span><div class="skill-track"><div class="skill-fill" data-pct="65" style="--c:#86c928"></div></div></div>
          </div>
          <h3>Technical Areas</h3>
          <div class="skill-bars">
            <div class="skill-row"><span class="skill-name">DSA</span><div class="skill-track"><div class="skill-fill" data-pct="90" style="--c:#00ffb3"></div></div></div>
            <div class="skill-row"><span class="skill-name">AI / ML</span><div class="skill-track"><div class="skill-fill" data-pct="82" style="--c:#ff2d9b"></div></div></div>
            <div class="skill-row"><span class="skill-name">Real-Time Systems</span><div class="skill-track"><div class="skill-fill" data-pct="88" style="--c:#00e0ff"></div></div></div>
            <div class="skill-row"><span class="skill-name">Computer Vision</span><div class="skill-track"><div class="skill-fill" data-pct="80" style="--c:#ffd24a"></div></div></div>
            <div class="skill-row"><span class="skill-name">Unreal Engine</span><div class="skill-track"><div class="skill-fill" data-pct="75" style="--c:#8b5cff"></div></div></div>
          </div>
          <h3>Tools</h3>
          <div>
            <span class="tech-badge">Git</span><span class="tech-badge">MySQL</span><span class="tech-badge">Firebase</span>
            <span class="tech-badge">SQLite</span><span class="tech-badge">OpenCV</span><span class="tech-badge">Arduino</span>
          </div>
          <h3>Education</h3>
          <p><strong>B.E. in Computer Engineering</strong> — Vidyalankar Institute of Technology, Mumbai</p>
          <p>2024–2028 &nbsp;|&nbsp; <strong style="color:#00ffb3;">GPA: 9.68 / 10</strong></p>
        `
      },
      projects: {
        content: `
          <h2>🗂️ PROJECT GALLERY</h2>
          <img src="assets/panel-divider.png" class="profile-photo-panel" alt="Manthan Jain" style="object-position:top center;">
          <div class="proj-card">
          <div class="proj-card-header"><span class="proj-tag">AI / CV</span><h3 style="margin:0;font-size:13px;">🎯 Vision India</h3></div>
          <p style="font-size:13px;">AI-Driven Face-Based Recommendation System — end-to-end facial analysis pipeline.</p>
          <p>End-to-end facial analysis pipeline leveraging landmark detection and geometric ratio modeling for face-shape classification.</p>
          <ul>
            <li>Rule-based and feature-mapped recommendation logic for frame matching under constrained mobile environments.</li>
            <li>Performance profiling to balance inference latency, model complexity, and memory utilization.</li>
            <li>Distributed database architecture supporting real-time transactional consistency and offline synchronization.</li>
            <li>Analytics-driven feedback loop to iteratively refine recommendation heuristics.</li>
          </ul>
          <div><span class="tech-badge">Python</span><span class="tech-badge">OpenCV</span><span class="tech-badge">Deep Learning</span><span class="tech-badge">Firebase</span><span class="tech-badge">Landmark Detection</span></div>
          <p style="margin-top:10px;"><a href="https://github.com/ManthanJain-bit?tab=repositories" target="_blank" class="gh-link">📂 View Detailed Project on GitHub →</a></p>
</div>
          <div class="proj-card">
          <div class="proj-card-header"><span class="proj-tag">C++ / UE5</span><h3 style="margin:0;font-size:13px;">⚡ Real-Time Interactive Simulation System</h3></div>
          <p>Deterministic simulation framework built with C++ and Unreal Engine emphasizing low-latency execution.</p>
          <ul>
            <li>Optimized spatial collision detection mechanisms reducing computational overhead.</li>
            <li>Iterative performance profiling and refactoring to enhance runtime efficiency.</li>
          </ul>
          <div><span class="tech-badge">C++</span><span class="tech-badge">Unreal Engine</span><span class="tech-badge">Physics Engine</span><span class="tech-badge">Collision Detection</span></div>
          <p style="margin-top:10px;"><a href="https://github.com/ManthanJain-bit?tab=repositories" target="_blank" class="gh-link">📂 View Detailed Project on GitHub →</a></p>
</div>
          <div class="proj-card">
          <div class="proj-card-header"><span class="proj-tag">Arduino</span><h3 style="margin:0;font-size:13px;">🤖 Embedded Gesture-Controlled Robotic System</h3></div>
          <p>Navigation system using Arduino and Python with real-time gesture classification.</p>
          <ul>
            <li>Embedded control architecture for obstacle-aware robotic navigation.</li>
            <li>Real-time gesture classification pipeline integrating microcontroller-level programming.</li>
            <li>Signal processing logic for structured decision modeling.</li>
          </ul>
          <div><span class="tech-badge">Arduino</span><span class="tech-badge">Python</span><span class="tech-badge">Computer Vision</span><span class="tech-badge">Signal Processing</span></div>
          <p style="margin-top:10px;"><a href="https://github.com/ManthanJain-bit?tab=repositories" target="_blank" class="gh-link">📂 View Detailed Project on GitHub →</a></p>
</div>
          <div class="proj-card">
          <div class="proj-card-header"><span class="proj-tag">Java / SQL</span><h3 style="margin:0;font-size:13px;">🗄️ Database-Driven Application Systems</h3></div>
          <p>Modular Java and C++ backend with MySQL and normalized relational schema design.</p>
          <ul>
            <li>Normalized relational schemas to optimize query performance and data consistency.</li>
            <li>Modular backend systems emphasizing scalability and structured architecture design.</li>
          </ul>
          <div><span class="tech-badge">Java</span><span class="tech-badge">C++</span><span class="tech-badge">MySQL</span><span class="tech-badge">SQLite</span></div>
          <p style="margin-top:10px;"><a href="https://github.com/ManthanJain-bit?tab=repositories" target="_blank" class="gh-link">📂 View Detailed Project on GitHub →</a></p>
          </div>
        `
      },
      research: {
        content: `
          <h2>🧠 RESEARCH VAULT</h2>
          <img src="assets/panel-divider.png" class="profile-photo-panel" alt="Manthan Jain" style="object-position:top center;">
          <h3>Research Interests</h3>
          <ul>
            <li><strong>Efficient ML Systems</strong> – optimizing model inference for constrained environments</li>
            <li><strong>Real-Time Systems Optimization</strong> – deterministic, low-latency computation</li>
            <li><strong>Computational Modeling</strong> – mathematical approaches to system simulation</li>
            <li><strong>Algorithmic Efficiency</strong> – time/space complexity reductions in applied systems</li>
            <li><strong>Scalable Distributed Systems</strong> – high-throughput, fault-tolerant pipelines</li>
          </ul>
          <h3>🎓 Certifications</h3>
          <p style="font-size:11px;color:rgba(0,255,179,0.6);margin-bottom:10px;">Click any certificate to view it</p>

          <div class="proj-card" onclick="openCertModal('daa')" style="cursor:pointer;margin-bottom:10px;border-color:rgba(255,45,155,0.35);background:rgba(255,45,155,0.04);">
            <div class="proj-card-header">
              <span class="proj-tag" style="background:rgba(255,45,155,0.15);border-color:rgba(255,45,155,0.5);color:#ff2d9b;">NPTEL — IIT Madras</span>
              <h3 style="margin:0;font-size:13px;">📜 Design &amp; Analysis of Algorithms</h3>
            </div>
            <p style="font-size:12px;margin:4px 0 0;">Elite Certificate · Score: <strong style="color:#ff2d9b;">78%</strong> · Jul–Sep 2025 · <em style="color:rgba(255,45,155,0.8)">TOP 2%</em></p>
            <p style="font-size:11px;color:rgba(0,255,179,0.5);margin-top:5px;">🔍 Click to view certificate</p>
          </div>

          <div class="proj-card" onclick="openCertModal('java')" style="cursor:pointer;margin-bottom:10px;border-color:rgba(0,224,255,0.35);background:rgba(0,224,255,0.04);">
            <div class="proj-card-header">
              <span class="proj-tag" style="background:rgba(0,224,255,0.15);border-color:rgba(0,224,255,0.5);color:#00e0ff;">NPTEL — IIT Kharagpur</span>
              <h3 style="margin:0;font-size:13px;">📜 Programming in Java (OOPS)</h3>
            </div>
            <p style="font-size:12px;margin:4px 0 0;">Elite Certificate · Score: <strong style="color:#00e0ff;">73%</strong> · Jan–Apr 2025</p>
            <p style="font-size:11px;color:rgba(0,255,179,0.5);margin-top:5px;">🔍 Click to view certificate</p>
          </div>

          <div class="proj-card" onclick="openCertModal('python')" style="cursor:pointer;margin-bottom:10px;border-color:rgba(139,92,255,0.35);background:rgba(139,92,255,0.04);">
            <div class="proj-card-header">
              <span class="proj-tag" style="background:rgba(139,92,255,0.15);border-color:rgba(139,92,255,0.5);color:#8b5cff;">Coursera</span>
              <h3 style="margin:0;font-size:13px;">📜 Introduction to Python</h3>
            </div>
            <p style="font-size:12px;margin:4px 0 0;">Certificate of Accomplishment · Jan 2026 · Authorized by Andrew Ng</p>
            <p style="font-size:11px;color:rgba(0,255,179,0.5);margin-top:5px;">🔍 Click to view certificate</p>
          </div>

          <div class="proj-card" onclick="openCertModal('robotics')" style="cursor:pointer;margin-bottom:10px;border-color:rgba(255,184,74,0.35);background:rgba(255,184,74,0.04);">
            <div class="proj-card-header">
              <span class="proj-tag" style="background:rgba(255,184,74,0.15);border-color:rgba(255,184,74,0.5);color:#ffb84a;">Alison</span>
              <h3 style="margin:0;font-size:13px;">📜 Diploma in Robotics</h3>
            </div>
            <p style="font-size:12px;margin:4px 0 0;">Scored <strong style="color:#ffb84a;">95%</strong> · Use Arduino without Internet to Control Electronic Devices</p>
            <p style="font-size:11px;color:rgba(0,255,179,0.5);margin-top:5px;">🔍 Click to view certificate</p>
          </div>
          <h3>Mathematical Foundations</h3>
          <div>
            <span class="tech-badge">Linear Algebra</span>
            <span class="tech-badge">Probability &amp; Statistics</span>
            <span class="tech-badge">Engineering Mathematics</span>
          </div>
          <h3>🏆 Achievements</h3>
          <div class="proj-card" style="border-color:rgba(255,180,0,0.4);background:rgba(255,180,0,0.05);">
            <div class="proj-card-header">
              <span class="proj-tag" style="background:rgba(255,165,0,0.15);border-color:rgba(255,165,0,0.5);color:#ffb84a;">LeetCode</span>
              <h3 style="margin:0;font-size:13px;">⚡ 50+ Problems Solved</h3>
            </div>
            <p style="font-size:13px;margin:6px 0;">Actively solving DSA problems since <strong style="color:#ffb84a;">January 2026</strong> — consistent daily practice in algorithms, data structures, and problem-solving patterns.</p>
            <p style="font-size:12px;margin:4px 0;">
              🔗 LeetCode Account:
              <a href="https://leetcode.com/u/Manthan__Jain/" target="_blank"
                 style="color:#00ffb3;text-decoration:none;border-bottom:1px solid rgba(0,255,179,0.4);padding-bottom:1px;transition:all 0.2s;"
                 onmouseover="this.style.color='#ff2d9b';this.style.borderBottomColor='rgba(255,45,155,0.6)'"
                 onmouseout="this.style.color='#00ffb3';this.style.borderBottomColor='rgba(0,255,179,0.4)'">
                Manthan__Jain
              </a>
            </p>
          </div>
          <p style="color:#a8fff0;margin-top:16px;font-size:12px;">This vault grows continuously — new learnings added each semester.</p>
        `
      },
      contact: {
        content: `
          <h2>📡 COMMS HUB</h2>
          <img src="assets/panel-divider.png" class="profile-photo-panel" alt="Manthan Jain" style="object-position:top center;">
          <h3>Get In Touch</h3>
          <p><strong>📧 Email:</strong> <a href="mailto:manthanmaheshjain@gmail.com" style="color:#a8fff0;">manthanmaheshjain@gmail.com</a></p>
          <p><strong>📱 Phone:</strong> <a href="tel:+918291682893" style="color:#a8fff0;">+91-8291 682893</a></p>
          <p><strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/manthan-jain-855413369" target="_blank" style="color:#a8fff0;">linkedin.com/in/manthan-jain-855413369</a></p>
          <p><strong>🐙 GitHub:</strong> <a href="https://github.com/ManthanJain-bit" target="_blank" style="color:#a8fff0;">github.com/ManthanJain-bit</a></p>
          <p><strong>🌐 Portfolio:</strong> <a href="https://manthanjain-bit.github.io/" target="_blank" style="color:#a8fff0;">manthanjain-bit.github.io</a></p>
          <p><strong>📍 Location:</strong> Mumbai, Maharashtra, India</p>
          <hr style="border-color:rgba(0,224,255,0.35);margin:18px 0;">
          <p>Always open to collaborating on AI/ML and game development projects.</p>
          <ul>
            <li>Project collaborations</li>
            <li>Technical discussions</li>
            <li>Internship opportunities</li>
            <li>Open source contributions</li>
          </ul>

          <h3 style="margin-top:20px;">💬 Send a Message</h3>
          <div class="contact-form">
            <label>YOUR NAME</label>
            <input type="text" id="cf-name" placeholder="e.g. John Doe" autocomplete="off">
            <label>YOUR EMAIL</label>
            <input type="email" id="cf-email" placeholder="e.g. john@example.com" autocomplete="off">
            <label>MESSAGE</label>
            <textarea id="cf-msg" placeholder="Hello Manthan, I'd love to connect about..."></textarea>
            <button class="cf-btn" onclick="sendContactForm()">⬡ TRANSMIT MESSAGE</button>
            <div class="cf-success" id="cf-success">✅ Message prepared — opening your email client...</div>
          </div>
        `
      }
    };

    // ─── Three.js State ─────────────────────────────────────────────────────────
    let scene, camera, renderer, raycaster;
    let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
    let velocity = new THREE.Vector3();
    const clock = new THREE.Clock();

    let interactables = [];
    let isLocked = false;
    let euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const PI_2 = Math.PI / 2;
    let photoTexture = null;
    let photo1Texture = null; // clean headshot for about cube + panels
    // Zone-specific cube face images
    let cubeTextures = {};

    // Panel state (fix scroll + exit requirement)
    let panelOpen = false;
    let currentZone = '';
    let worldReady = false;
    let pendingLockRequest = false;
    let useFallbackMouse = false;

    // Global — must be on window for onclick attribute
    window.enterWorld = function enterWorld() {
      // ── Reset camera to clean forward-facing state ─────────────────────────
      camera.position.set(0, 1.6, 7);
      camera.rotation.set(0, 0, 0);
      camera.quaternion.set(0, 0, 0, 1);
      euler.set(0, 0, 0, 'YXZ');

      document.getElementById('welcome-screen').classList.add('hidden');
      // Hide neon rain so it doesn't cover the 3D world
      document.getElementById('neon-rain').classList.add('hidden-rain');
      startBgMusic();
      document.getElementById('scanlines').style.opacity = '0.4'; // keep subtle scanlines
      document.getElementById('loading-screen').classList.remove('hidden');
      if (isMobile) {
        document.getElementById('loading-screen').classList.add('hidden');
        useFallbackMouse = true; isLocked = true; return;
      }
      if (worldReady) {
        document.getElementById('loading-screen').classList.add('hidden');
        tryLock();
      } else {
        pendingLockRequest = true; // tryLock fires once worldReady
      }
    };

    function safeRequestPointerLock() { tryLock(); }
    function tryLock() {
      try {
        const p = renderer.domElement.requestPointerLock();
        if (p && typeof p.catch === 'function') {
          p.catch(() => { useFallbackMouse = true; isLocked = true; });
        }
      } catch(e) { useFallbackMouse = true; isLocked = true; }
    }
    window.tryLock = tryLock;

    // ─── Init ──────────────────────────────────────────────────────────────────
    function init() {
      scene = new THREE.Scene();

      // World not fully black anymore
      const bg = 0x06162e;
      scene.background = new THREE.Color(bg);
      scene.fog = new THREE.FogExp2(bg, 0.010);

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 1.6, 7);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      document.getElementById('canvas-container').appendChild(renderer.domElement);

      // Lighting (more “decent” colors)
      scene.add(new THREE.AmbientLight(0xbfe9ff, 0.45));
      const hemi = new THREE.HemisphereLight(0x6fd3ff, 0x141022, 0.55);
      scene.add(hemi);

      const pl1 = new THREE.PointLight(0x48ff9e, 1.15, 70); pl1.position.set(0, 10, 0); scene.add(pl1);
      const pl2 = new THREE.PointLight(0x00e0ff, 0.75, 55); pl2.position.set(-16, 6, -10); scene.add(pl2);
      const pl3 = new THREE.PointLight(0x8b5cff, 0.70, 55); pl3.position.set(16, 6, 10); scene.add(pl3);

      addSkyDome();
      addFloatingParticles();

      // Ground
      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(140, 140, 70, 70),
        new THREE.MeshStandardMaterial({ color: 0x071225, roughness: 0.88, metalness: 0.15 })
      );
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      scene.add(ground);

      const grid = new THREE.GridHelper(140, 70, 0x00e0ff, 0x2d7cff);
      grid.material.opacity = 0.16;
      grid.material.transparent = true;
      scene.add(grid);

      // Load both photos via Image() — THREE.TextureLoader can't handle data: URLs
      function loadImageTexture(dataUrl, onDone) {
        const img = new Image();
        img.onload = () => {
          const tex = new THREE.CanvasTexture(img);
          tex.needsUpdate = true;
          onDone(tex);
        };
        img.onerror = () => onDone(null);
        img.src = dataUrl;
      }

      let loadsDone = 0;
      const TOTAL_LOADS = 7; // photo1 + photo2 + 5 zone cube images
      function onAllLoaded() {
        loadsDone++;
        if (loadsDone < TOTAL_LOADS) return;
        buildWorld();
        worldReady = true;
        _attachTouchControls();
        if (pendingLockRequest && !isMobile) { pendingLockRequest = false; tryLock(); }
        showLoading(false);
      }

      // Loading screen shown when user clicks Enter — not during silent init
      loadImageTexture(PHOTO1_URL,           tex => { photo1Texture = tex; onAllLoaded(); });
      loadImageTexture(PHOTO_URL,            tex => { photoTexture  = tex; onAllLoaded(); });
      loadImageTexture(CUBE_IMG_PROJECTS,    tex => { cubeTextures['projects']   = tex; onAllLoaded(); });
      loadImageTexture(CUBE_IMG_EXPERIENCE,  tex => { cubeTextures['experience'] = tex; onAllLoaded(); });
      loadImageTexture(CUBE_IMG_SKILLS,      tex => { cubeTextures['skills']     = tex; onAllLoaded(); });
      loadImageTexture(CUBE_IMG_CONTACT,     tex => { cubeTextures['contact']    = tex; onAllLoaded(); });
      loadImageTexture(CUBE_IMG_RESEARCH,    tex => { cubeTextures['research']   = tex; onAllLoaded(); });

      // Controls
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('click', onClick);
      document.addEventListener('pointerlockchange', onPointerlockChange);
      document.addEventListener('pointerlockerror', () => { useFallbackMouse = true; isLocked = true; console.warn('Pointer lock blocked — using fallback mouse.'); });

      document.getElementById('start-btn').addEventListener('click', window.enterWorld);

      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('keyup', onKeyUp);
      window.addEventListener('resize', onWindowResize);

      // When panel is open: make mouse wheel scroll the panel
      window.addEventListener('wheel', (e) => {
        const p = document.getElementById('info-panel');
        if (!p.classList.contains('active')) return;
        // Keep the scroll inside the panel (prevents any weird page scroll attempts)
        // NOTE: we do NOT preventDefault here to allow natural panel scrolling.
      }, { passive: true });

      // Panel hint updates
      document.getElementById('info-panel').addEventListener('scroll', updatePanelHint);

      raycaster = new THREE.Raycaster();
      raycaster.far = 7;

      animate();
    }

    // ─── Loading UI ────────────────────────────────────────────────────────────
    function showLoading(show) {
      const el = document.getElementById('loading-screen');
      if (show) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
    function setLoadingProgress(pct) {
      document.getElementById('loading-progress').style.width = pct + '%';
    }

    // ─── Sky dome (soft gradient + stars) ─────────────────────────────────────
    function addSkyDome() {
      const c = document.createElement('canvas');
      c.width = 1024; c.height = 512;
      const ctx = c.getContext('2d');
      const g = ctx.createLinearGradient(0, 0, 0, 512);
      g.addColorStop(0, '#0b2a4a');
      g.addColorStop(0.55, '#06162e');
      g.addColorStop(1, '#040410');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 1024, 512);

      // Stars
      for (let i = 0; i < 900; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        const r = Math.random() * 1.5;
        const a = Math.random() * 0.85;
        ctx.fillStyle = `rgba(210,245,255,${a})`;
        ctx.fillRect(x, y, r, r);
      }

      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.needsUpdate = true;

      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(280, 48, 24),
        new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })
      );
      scene.add(dome);
    }

    // ─── Floating particles ───────────────────────────────────────────────────
    function addFloatingParticles() {
      const count = 1200;
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 150;
        positions[i * 3 + 1] = Math.random() * 30 + 2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 150;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({ color: 0x9fffe8, size: 0.08, transparent: true, opacity: 0.55 });
      const pts = new THREE.Points(geo, mat);
      pts.userData._isParticles = true;
      scene.add(pts);
    }

    // ─── Build world after texture loads ──────────────────────────────────────

    // ── Home Nameplate Sign ──────────────────────────────────────────────────
    function createCubeNameplate(x, z, glowHex, labelText) {
      const glow = new THREE.Color(glowHex);

      // Pole is placed OUTSIDE the platform edge (radius 4.2)
      // Pole X: x + 5.5 — well clear of the cube (cube is ~3 units wide, platform radius 4.2)
      const POLE_X = x + 5.5;
      const POLE_Y_BASE = 0.46;
      const POLE_H    = 3.6;

      // ── Vertical pole ────────────────────────────────────────────────────
      const poleGeo = new THREE.CylinderGeometry(0.06, 0.06, POLE_H, 8);
      const poleMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a2e, metalness: 0.9, roughness: 0.2,
        emissive: glow, emissiveIntensity: 0.2,
      });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(POLE_X, POLE_Y_BASE + POLE_H / 2, z);
      scene.add(pole);

      // ── Pole base disc ───────────────────────────────────────────────────
      const baseGeo = new THREE.CylinderGeometry(0.25, 0.30, 0.20, 12);
      const baseMesh = new THREE.Mesh(baseGeo, poleMat.clone());
      baseMesh.position.set(POLE_X, POLE_Y_BASE + 0.10, z);
      scene.add(baseMesh);

      // ── Horizontal arm — extends LEFT from pole top toward cube ───────────
      // Arm is 2.4 units long, sticks toward the cube side
      const ARM_LEN = 2.4;
      const armGeo = new THREE.CylinderGeometry(0.045, 0.045, ARM_LEN, 6);
      const armMesh = new THREE.Mesh(armGeo, poleMat.clone());
      armMesh.rotation.z = Math.PI / 2;
      // Center of arm: half of ARM_LEN to the left of the pole top
      armMesh.position.set(POLE_X - ARM_LEN / 2, POLE_Y_BASE + POLE_H - 0.1, z);
      scene.add(armMesh);

      // ── Nameplate board ──────────────────────────────────────────────────
      // Canvas-textured sign
      const signCanvas = document.createElement('canvas');
      signCanvas.width  = 512;
      signCanvas.height = 192;
      const ctx = signCanvas.getContext('2d');

      // Background
      const bg = ctx.createLinearGradient(0, 0, 512, 0);
      bg.addColorStop(0, '#020b18');
      bg.addColorStop(0.5, '#041428');
      bg.addColorStop(1, '#020b18');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 512, 192);

      // Outer border
      ctx.strokeStyle = glowHex;
      ctx.lineWidth = 6;
      ctx.strokeRect(4, 4, 504, 184);
      // Inner thin border
      ctx.strokeStyle = glowHex + '66';
      ctx.lineWidth = 2;
      ctx.strokeRect(12, 12, 488, 168);

      // Corner accent marks
      const cSize = 18;
      ctx.strokeStyle = glowHex;
      ctx.lineWidth = 3;
      [[14,14],[498,14],[14,178],[498,178]].forEach(([cx,cy]) => {
        ctx.beginPath(); ctx.moveTo(cx, cy + cSize); ctx.lineTo(cx, cy); ctx.lineTo(cx + (cx < 256 ? cSize : -cSize), cy); ctx.stroke();
      });

      // "► HOME" text
      ctx.font = 'bold 80px Orbitron, Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = glowHex;
      ctx.shadowColor = glowHex;
      ctx.shadowBlur = 28;
      ctx.fillText(labelText, 256, 96);
      ctx.shadowBlur = 0;

      // Arrow indicator (small ◄)
      ctx.font = 'bold 32px Orbitron, Arial';
      ctx.fillStyle = glowHex + 'aa';
      ctx.fillText('◄', 60, 96);
      ctx.fillText('►', 452, 96);

      // Scan-line effect
      ctx.fillStyle = 'rgba(0,255,179,0.025)';
      for (let y = 0; y < 192; y += 3) ctx.fillRect(0, y, 512, 1);

      const signTex = new THREE.CanvasTexture(signCanvas);

      // Sign mesh
      const signGeo  = new THREE.BoxGeometry(1.9, 0.72, 0.06);
      const signMat  = new THREE.MeshStandardMaterial({
        map: signTex,
        emissive: glow, emissiveIntensity: 0.35,
        metalness: 0.4, roughness: 0.5,
      });
      const sign = new THREE.Mesh(signGeo, signMat);
      // Sign hangs below the LEFT tip of the arm (toward the cube side but clear of it)
      // Arm left tip = POLE_X - ARM_LEN = x + 5.5 - 2.4 = x + 3.1
      // Sign width = 1.9, centered at arm tip → sign spans x+2.15 to x+4.05
      // Cube is ~1.5 units from center, so x+3.1 is well clear
      const SIGN_X = POLE_X - ARM_LEN + 0.2; // left tip of arm + small offset
      const SIGN_Y = POLE_Y_BASE + POLE_H - 0.1 - 0.55; // below arm
      sign.position.set(SIGN_X, SIGN_Y, z);
      scene.add(sign);

      // ── Hanging chains ───────────────────────────────────────────────────
      const chainMat = new THREE.MeshStandardMaterial({ color: 0x444466, metalness: 0.95, roughness: 0.15 });
      [-0.7, 0.7].forEach(offset => {
        const cGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.28, 4);
        const chain = new THREE.Mesh(cGeo, chainMat);
        chain.position.set(SIGN_X + offset * 0.9, SIGN_Y + 0.50, z);
        scene.add(chain);
      });

      // ── Neon underglow strip ─────────────────────────────────────────────
      const stripGeo = new THREE.BoxGeometry(1.85, 0.04, 0.04);
      const stripMat = new THREE.MeshBasicMaterial({ color: glow });
      const strip    = new THREE.Mesh(stripGeo, stripMat);
      strip.position.set(SIGN_X, SIGN_Y - 0.40, z + 0.07);
      scene.add(strip);

      // ── Point light at sign ──────────────────────────────────────────────
      const pLight = new THREE.PointLight(glow, 0.9, 6);
      pLight.position.set(SIGN_X, SIGN_Y + 0.2, z + 0.5);
      pLight.userData.isNameplateLight = true;
      scene.add(pLight);
    }

    function buildWorld() {
      // Platforms + cubes
      SECTIONS.forEach((s) => {
        createPlatform(s.x, s.z, s.base, s.glow, s.shape);
      });
      createFloatingOrbs();
      createNeonBeams();

      // Connectors (nice “divided into sections” look)
      const home = SECTIONS.find(s => s.id === 'home');
      SECTIONS.filter(s => s.id !== 'home').forEach((s) => createPath(home.x, home.z, s.x, s.z, new THREE.Color(s.glow)));

      // Cubes
      SECTIONS.forEach((s) => {
        if (s.id === 'home') {
          createCenterPhotoCube(s.x, 1.6, s.z, s.base, s.glow, 'MANTHAN JAIN', 'home');
          createCubeNameplate(s.x, s.z, s.glow, 'HOME');
        } else {
          createInteractableCube(s.x, 1.6, s.z, s.base, s.glow, s.nav, s.id, s.emoji);
          createCubeNameplate(s.x, s.z, s.glow, s.nav);
        }
      });

      // ── Cyberpunk city environment ──────────────────────────────────────────
      buildCitySkyline();
      buildStreetGrid();
      buildFlyingVehicles();
      initTrail();
    }

    // ─── Pointer Lock ─────────────────────────────────────────────────────────
    function onPointerlockChange() {
      const locked = document.pointerLockElement === renderer.domElement;
      isLocked = locked || useFallbackMouse;
      if (locked) {
        // Re-sync euler to current camera state when lock is acquired
        euler.setFromQuaternion(camera.quaternion, 'YXZ');
      }
    }

    let _fbDown = false, _fbLX = 0, _fbLY = 0;
    function onMouseMove(event) {
      if (panelOpen) return;
      let dx = 0, dy = 0;
      if (document.pointerLockElement === renderer.domElement) {
        dx = event.movementX || 0; dy = event.movementY || 0;
      } else if (useFallbackMouse && _fbDown) {
        dx = event.clientX - _fbLX; dy = event.clientY - _fbLY;
        _fbLX = event.clientX; _fbLY = event.clientY;
      } else return;
      // Always re-sync euler from current quaternion to prevent gimbal flip
      euler.setFromQuaternion(camera.quaternion, 'YXZ');
      euler.y -= dx * 0.002;
      euler.x -= dy * 0.002;
      euler.x = Math.max(-Math.PI * 0.33, Math.min(Math.PI * 0.33, euler.x));
      camera.quaternion.setFromEuler(euler);
    }
    document.addEventListener('mousedown', e => { if (useFallbackMouse && !panelOpen) { _fbDown=true; _fbLX=e.clientX; _fbLY=e.clientY; }});
    document.addEventListener('mouseup', () => { _fbDown = false; });

    function onClick() {
      if (!isLocked && worldReady && !panelOpen && document.getElementById('welcome-screen').classList.contains('hidden')) {
        safeRequestPointerLock();
      }
    }

    // ─── Canvas textures (images on every cube) ───────────────────────────────
    function makeFaceTexture(label, glowHex, emoji, usePhotoCircle = true, zoneId = '') {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 512;
      const ctx = c.getContext('2d');

      // Gradient background
      const g = ctx.createLinearGradient(0, 0, 512, 512);
      g.addColorStop(0, '#050515');
      g.addColorStop(0.55, '#0b2a4a');
      g.addColorStop(1, '#040410');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 512, 512);

      // Border glow
      ctx.strokeStyle = glowHex;
      ctx.lineWidth = 12;
      ctx.strokeRect(10, 10, 492, 492);

      // Image selection:
      // - about → clean headshot (photo1) in circle
      // - projects/experience/skills/contact/research → zone image, FILL full face (no circle)
      // - home → photo2 (handled in createCenterPhotoCube, not here)
      const _zoneImgCubes = ['projects','experience','skills','contact','research'];
      const _isZoneImg = _zoneImgCubes.includes(zoneId);

      if (_isZoneImg && cubeTextures[zoneId] && cubeTextures[zoneId].image) {
        // Zone cubes: fill entire face with the zone image (no photo at all)
        ctx.drawImage(cubeTextures[zoneId].image, 0, 0, 512, 512);

      } else if (zoneId === 'about' && (photo1Texture || photoTexture)) {
        // About cube: headshot in circle only
        const tex = photo1Texture || photoTexture;
        if (tex && tex.image) {
          const r = 152;
          ctx.save();
          ctx.beginPath();
          ctx.arc(256, 210, r, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(tex.image, 256 - r, 210 - r - 40, r * 2, r * 2);
          ctx.restore();
          // Glow ring
          ctx.beginPath();
          ctx.arc(256, 210, r, 0, Math.PI * 2);
          ctx.strokeStyle = glowHex;
          ctx.lineWidth = 8;
          ctx.shadowColor = glowHex;
          ctx.shadowBlur = 22;
          ctx.stroke();
          ctx.shadowBlur = 0;
          // Outer halo
          ctx.beginPath();
          ctx.arc(256, 210, r + 18, 0, Math.PI * 2);
          ctx.strokeStyle = glowHex + '44';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      } else {
        // Fallback: just show emoji — NO photo on any other cube
        ctx.font = 'bold 150px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.fillText(emoji || '◆', 256, 265);
      }

      // Label — removed from cube face (tooltip shows on proximity)
      ctx.shadowBlur = 0;

      // Top label tag removed — cleaner face

      // Scan-line effect
      ctx.fillStyle = 'rgba(0,224,255,0.035)';
      for (let y = 0; y < 512; y += 4) ctx.fillRect(0, y, 512, 2);

      return new THREE.CanvasTexture(c);
    }

    function makeTextTexture(text, glowHex) {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 512;
      const ctx = c.getContext('2d');

      ctx.fillStyle = '#050515';
      ctx.fillRect(0, 0, 512, 512);

      ctx.strokeStyle = glowHex;
      ctx.lineWidth = 14;
      ctx.strokeRect(12, 12, 488, 488);

      ctx.font = 'bold 62px Orbitron, Courier New';
      ctx.textAlign = 'center';
      ctx.fillStyle = glowHex;
      ctx.shadowColor = glowHex;
      ctx.shadowBlur = 18;

      const lines = text.split('\n');
      const startY = 256 - (lines.length - 1) * 30;
      lines.forEach((ln, i) => ctx.fillText(ln, 256, startY + i * 60));

      ctx.shadowBlur = 0;
      return new THREE.CanvasTexture(c);
    }

    // ─── Cube creation ─────────────────────────────────────────────────────────

    // Neon cap texture for top/bottom faces of interactable cubes
    function _makeCapTex(glowHex) {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');

      // Dark background
      ctx.fillStyle = '#030912';
      ctx.fillRect(0, 0, 256, 256);

      // Outer glow border
      ctx.strokeStyle = glowHex;
      ctx.lineWidth = 5;
      ctx.strokeRect(6, 6, 244, 244);

      // Inner border
      ctx.strokeStyle = glowHex + '55';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(14, 14, 228, 228);

      // Corner L-marks
      const cs = 20;
      ctx.strokeStyle = glowHex;
      ctx.lineWidth = 3;
      [[8,8],[248,8],[8,248],[248,248]].forEach(([cx,cy]) => {
        const dx = cx < 128 ? cs : -cs;
        const dy = cy < 128 ? cs : -cs;
        ctx.beginPath(); ctx.moveTo(cx+dx, cy); ctx.lineTo(cx, cy); ctx.lineTo(cx, cy+dy); ctx.stroke();
      });

      // Centre diamond
      ctx.strokeStyle = glowHex + 'aa';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(128, 108); ctx.lineTo(148, 128); ctx.lineTo(128, 148); ctx.lineTo(108, 128); ctx.closePath();
      ctx.stroke();

      // Scanlines
      ctx.fillStyle = 'rgba(0,255,179,0.02)';
      for (let y = 0; y < 256; y += 4) ctx.fillRect(0, y, 256, 2);

      return new THREE.CanvasTexture(c);
    }

    function createInteractableCube(x, y, z, colorHex, glowHex, label, zoneId, emoji) {
      const faceTex = makeFaceTexture(label, glowHex, emoji, true, zoneId);

      // Top/bottom cap: dark with neon glow border — no image stretch
      const capTex = _makeCapTex(glowHex);
      const sideMat = { map: faceTex, emissive: new THREE.Color(glowHex), emissiveIntensity: 0.12, roughness: 0.35, metalness: 0.75 };
      const capMat  = { map: capTex,  emissive: new THREE.Color(glowHex), emissiveIntensity: 0.25, roughness: 0.4,  metalness: 0.8  };
      const materials = [
        new THREE.MeshStandardMaterial(sideMat), // +X
        new THREE.MeshStandardMaterial(sideMat), // -X
        new THREE.MeshStandardMaterial(capMat),  // +Y  TOP
        new THREE.MeshStandardMaterial(capMat),  // -Y  BOTTOM
        new THREE.MeshStandardMaterial(sideMat), // +Z
        new THREE.MeshStandardMaterial(sideMat), // -Z
      ];

      const box = new THREE.Mesh(new THREE.BoxGeometry(3.0, 3.0, 3.0), materials);
      box.position.set(x, y, z);
      box.castShadow = true;
      box.userData = { type: 'interactable', zone: zoneId, label: label };
      scene.add(box);

      const glow = new THREE.Mesh(
        new THREE.BoxGeometry(3.15, 3.15, 3.15),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(glowHex), transparent: true, opacity: 0.10, side: THREE.BackSide })
      );
      glow.name = 'glowMesh';
      box.add(glow);

      interactables.push(box);
      return box;
    }

    // Center cube: your photo on all 4 sides (left/right/front/back)
    function createCenterPhotoCube(x, y, z, colorHex, glowHex, label, zoneId) {
      const labelTex = makeTextTexture('MANTHAN\nJAIN', glowHex);
      // Use photo2 (AI bg image) on all 4 sides — MeshBasicMaterial so NO color tint from emissive/lighting
      const sideTex = photoTexture ? photoTexture : makeFaceTexture('MANTHAN JAIN', glowHex, '🧿', false);

      // MeshBasicMaterial = unlit, pure texture colors, no green tint
      const sideMat = new THREE.MeshBasicMaterial({ map: sideTex });

      const topBottomMat = new THREE.MeshStandardMaterial({
        map: labelTex,
        emissive: new THREE.Color(glowHex),
        emissiveIntensity: 0.25,
        roughness: 0.35,
        metalness: 0.65
      });

      // Order: +X, -X, +Y, -Y, +Z, -Z  (4 sides = photo, top/bottom = name label)
      const materials = [sideMat, sideMat, topBottomMat, topBottomMat, sideMat, sideMat];

      const box = new THREE.Mesh(new THREE.BoxGeometry(2.7, 3.2, 2.7), materials);
      box.position.set(x, y, z);
      box.castShadow = true;
      box.userData = { type: 'interactable', zone: zoneId, label: label };
      scene.add(box);

      const glow = new THREE.Mesh(
        new THREE.BoxGeometry(3.05, 3.55, 3.05),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(glowHex), transparent: true, opacity: 0.12, side: THREE.BackSide })
      );
      box.add(glow);

      interactables.push(box);
      return box;
    }

    // ─── Platforms / Paths ────────────────────────────────────────────────────
    function createPlatform(x, z, color, glowHex, shape = 'box') {
      let geo;
      if (shape === 'circle') geo = new THREE.CylinderGeometry(4.2, 4.2, 0.45, 56);
      else geo = new THREE.BoxGeometry(9.6, 0.45, 9.6);

      const mat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: new THREE.Color(glowHex),
        emissiveIntensity: 0.20,
        metalness: 0.75,
        roughness: 0.28
      });

      const plat = new THREE.Mesh(geo, mat);
      plat.position.set(x, 0.23, z);
      plat.receiveShadow = true;
      scene.add(plat);

      // Edge glow
      if (shape === 'circle') {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(4.2, 0.09, 16, 72),
          new THREE.MeshBasicMaterial({ color: new THREE.Color(glowHex), transparent: true, opacity: 0.85 })
        );
        ring.position.set(x, 0.44, z);
        ring.rotation.x = Math.PI / 2;
        scene.add(ring);
      } else {
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.BoxGeometry(9.8, 0.55, 9.8)),
          new THREE.LineBasicMaterial({ color: new THREE.Color(glowHex), transparent: true, opacity: 0.75 })
        );
        edges.position.set(x, 0.44, z);
        scene.add(edges);
      }
    }

    function createPath(x1, z1, x2, z2, color) {
      const points = [new THREE.Vector3(x1, 0.06, z1), new THREE.Vector3(x2, 0.06, z2)];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.38 });
      scene.add(new THREE.Line(geo, mat));
    }

    // ─── Keyboard / Interaction ───────────────────────────────────────────────
    function onKeyDown(e) {
      const panelActive = document.getElementById('info-panel').classList.contains('active');

      // When inside a cube panel: scroll + ENTER to exit (only when at bottom)
      if (panelActive) {
        if (e.code === 'Enter' || e.code === 'Escape') {
          attemptCloseInfoPanel();
        }
        return;
      }

      switch (e.code) {
        case 'KeyW': moveForward = true; break;
        case 'KeyS': moveBackward = true; break;
        case 'KeyA': moveLeft = true; break;
        case 'KeyD': moveRight = true; break;
        case 'KeyE': checkInteraction(); break;
      }
    }

    function onKeyUp(e) {
      switch (e.code) {
        case 'KeyW': moveForward = false; break;
        case 'KeyS': moveBackward = false; break;
        case 'KeyA': moveLeft = false; break;
        case 'KeyD': moveRight = false; break;
      }
    }

    function checkInteraction() {
      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      const hits = raycaster.intersectObjects(interactables, true);
      if (hits.length > 0) {
        let obj = hits[0].object;
        while (obj && !obj.userData.type) obj = obj.parent;
        if (obj && obj.userData.type === 'interactable') openInfoPanel(obj.userData.zone);
      }
    }

    function openInfoPanel(zone) {
      playSfxEnter();
      const data = portfolioData[zone];
      if (!data) return;

      currentZone = zone;

      // Stop movement
      moveForward = moveBackward = moveLeft = moveRight = false;

      // Unlock pointer lock so mouse wheel scrolls inside panel
      if (document.pointerLockElement) document.exitPointerLock();

      panelOpen = true;
      document.body.classList.add('panel-open');

      document.getElementById('info-content').innerHTML = data.content;
      const panel = document.getElementById('info-panel');
      panel.classList.add('active');
      panel.scrollTop = 0;

      // HOME cube: show scroll-to-unlock hint, hide normal EXIT btn
      // All others: show normal EXIT btn, hide scroll hint
      const hint = document.getElementById('panel-hint');
      const exitBtn = document.querySelector('#info-panel .close-btn');
      if (zone === 'home') {
        hint.style.display = 'block';
        exitBtn.style.display = 'none';
        updatePanelHint();
      } else {
        hint.style.display = 'none';
        exitBtn.style.display = 'block';
      }
    }

    function panelAtBottom() {
      const panel = document.getElementById('info-panel');
      return (panel.scrollTop + panel.clientHeight) >= (panel.scrollHeight - 8);
    }

    function updatePanelHint() {
      const hint = document.getElementById('panel-hint');
      if (!document.getElementById('info-panel').classList.contains('active')) return;
      if (currentZone !== 'home') { hint.style.display = 'none'; return; }
      hint.style.display = '';
      if (panelAtBottom()) {
        hint.innerHTML = 'Reached the end ✓ Press <strong>ENTER</strong> or click EXIT.';
        hint.style.borderColor = 'rgba(72,255,158,0.85)';
      } else {
        hint.innerHTML = 'Scroll to the end to unlock EXIT → then press <strong>ENTER</strong>.';
        hint.style.borderColor = 'rgba(72,255,158,0.35)';
      }
    }

    // HOME cube: scroll-to-end gate. All others: instant close.
    function attemptCloseInfoPanel() {
      playSfxExit();
      const panel = document.getElementById('info-panel');
      if (!panel.classList.contains('active')) return;

      if (currentZone === 'home' && !panelAtBottom()) {
        panel.scrollBy({ top: 220, behavior: 'smooth' });
        updatePanelHint();
        return;
      }

      panel.classList.remove('active');
      panelOpen = false;
      currentZone = '';
      document.body.classList.remove('panel-open');
    }

    function closeInfoPanel() { attemptCloseInfoPanel(); }
    // Expose to global scope — onclick="" attrs can't reach ES module scope
    window.attemptCloseInfoPanel = attemptCloseInfoPanel;
    window.closeInfoPanel = closeInfoPanel;

    // ─── HUD + Navbar highlight ───────────────────────────────────────────────
    const zonePositions = Object.fromEntries(SECTIONS.map(s => [s.id, new THREE.Vector3(s.x, 0, s.z)]));
    const zoneNames = Object.fromEntries(SECTIONS.map(s => [s.id, s.nav]));

    function setActiveNav(zoneId) {
      const items = document.querySelectorAll('.nav-item');
      items.forEach(it => it.classList.toggle('active', it.dataset.zone === zoneId));
    }

    function updateHUD() {
      let nearest = 'home', minD = Infinity;
      for (const [z, p] of Object.entries(zonePositions)) {
        const d = camera.position.distanceTo(p);
        if (d < minD) { minD = d; nearest = z; }
      }

      document.getElementById('location').textContent = `Location: ${zoneNames[nearest]}`;
      setActiveNav(nearest);

      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      const hits = raycaster.intersectObjects(interactables, true);
      const instr = document.getElementById('instruction');

      if (hits.length > 0 && hits[0].distance < 7) {
        let obj = hits[0].object;
        while (obj && !obj.userData.label) obj = obj.parent;
        instr.textContent = `Press E to enter ${obj ? obj.userData.label : '...'}`;
        instr.style.display = 'block';
      } else {
        instr.style.display = 'none';
      }
    }

    // ─── Animation loop ───────────────────────────────────────────────────────
    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isLocked && !panelOpen) {
        // Friction
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        // ── Mobile right-joystick camera look (continuous) ──────────────────
        if (typeof joyState !== 'undefined' && joyState.right.active) {
          const rx = joyState.right.dx, ry = joyState.right.dy;
          const DEAD = 0.15, LOOK_SPEED = 2.2;
          if (Math.abs(rx) > DEAD || Math.abs(ry) > DEAD) {
            euler.setFromQuaternion(camera.quaternion);
            euler.y -= rx * LOOK_SPEED * delta;
            euler.x -= ry * LOOK_SPEED * delta;
            euler.x = Math.max(-Math.PI * 0.33, Math.min(Math.PI * 0.33, euler.x));
            camera.quaternion.setFromEuler(euler);
          }
        }

        // Acceleration
        const speed = 35.0;
        if (moveForward)  velocity.z += speed * delta;
        if (moveBackward) velocity.z -= speed * delta;
        if (moveLeft)     velocity.x -= speed * delta;
        if (moveRight)    velocity.x += speed * delta;

        // Forward/backward
        const fwd = new THREE.Vector3();
        camera.getWorldDirection(fwd);
        fwd.y = 0;
        fwd.normalize();
        camera.position.addScaledVector(fwd, velocity.z * delta);

        // Strafe
        const right = new THREE.Vector3();
        right.setFromMatrixColumn(camera.matrix, 0);
        right.y = 0;
        right.normalize();
        camera.position.addScaledVector(right, velocity.x * delta);

        camera.position.y = 1.6;
        updateHUD();
      }

      // Animate cubes (float + rotate + hover speedup)
      const t = Date.now() * 0.001;
      interactables.forEach((obj, i) => {
        const isHome = (obj.userData && obj.userData.zone === 'home');
        const isHovered = (obj === hoveredCube);
        const rotSpeed = isHome ? 0.008 : (isHovered ? 0.018 : 0.004);
        obj.rotation.y += rotSpeed;
        obj.position.y = 1.6 + Math.sin(t + i * 1.2) * (isHome ? 0.22 : 0.16);
      });
      updateBeamPulses(t);
      updateFloatingOrbs(t);
      if (worldReady) updateCubeHover();
      if (cameraFlyActive) updateCameraFly(delta);

      // ── New feature updates ─────────────────────────────────────────────────
      updateHeadBob(delta);
      updateTrail(delta);
      updateCityBeacons(t);
      updateFlyingVehicles(t);
      updateFootstepSfx(t);
      // Pulse nameplate light
      scene.traverse(obj => {
        if (obj.isPointLight && obj.userData.isNameplateLight) {
          obj.intensity = 0.5 + 0.5 * Math.abs(Math.sin(t * 1.8));
        }
      });

      // Drift particles slowly
      scene.traverse((o) => {
        if (o.userData && o.userData._isParticles) {
          o.rotation.y += 0.0006;
        }
      });

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // ─── Start ────────────────────────────────────────────────────────────────

    // ── Typewriter effect + click sound ──────────────────────────────────────

    // ── Certificate Viewer ──────────────────────────────────────────────────────
    const CERTS = {
      'daa':      { title:'Design & Analysis of Algorithms — NPTEL Elite', type:'img', data:'assets/certs/daa-nptel.jpg' },
      'java':     { title:'Programming in Java — NPTEL Elite',              type:'img', data:'assets/certs/java-nptel.jpg' },
      'robotics': { title:'Diploma in Robotics — Alison (Scored 95%)',     type:'img', data:'assets/certs/robotics-alison.png' },
      'python':   { title:'Introduction to Python — Coursera',             type:'img', data:'assets/certs/python-coursera.png' },
    };

    function openCertModal(id) {
      const cert = CERTS[id];
      if (!cert) return;
      document.getElementById('cert-modal-title').textContent = '🏅 ' + cert.title;
      const content = document.getElementById('cert-modal-content');
      content.innerHTML = '<img src="' + cert.data + '" alt="' + cert.title +
        '" style="display:block;max-width:85vw;max-height:82vh;border-radius:4px;">';
      document.getElementById('cert-modal').classList.add('active');
      document.getElementById('cert-modal').onclick = function(e) {
        if (e.target === this) closeCertModal();
      };
    }
    function closeCertModal() {
      document.getElementById('cert-modal').classList.remove('active');
      document.getElementById('cert-modal-content').innerHTML = '';
    }

    window.openCertModal = openCertModal;
    window.closeCertModal = closeCertModal;

    // ESC closes modal
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeCertModal();
    });


    // ── Mobile / Touch Detection & Controls ─────────────────────────────────
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || ('ontouchstart' in window)
      || (navigator.maxTouchPoints > 1);

    if (isMobile) {
      document.body.classList.add('is-mobile');
      // On mobile skip pointer lock entirely — use fallback mouse mode
      useFallbackMouse = true;
      isLocked = true;
    }

    // ── Joystick State ────────────────────────────────────────────────────────
    const joyState = {
      left:  { active: false, id: null, startX: 0, startY: 0, dx: 0, dy: 0 },
      right: { active: false, id: null, startX: 0, startY: 0, dx: 0, dy: 0 },
    };
    const JOY_RADIUS = 40; // max knob travel px

    function _joyGetEl(side) {
      return {
        zone: document.getElementById('joy-' + side + '-zone'),
        base: document.getElementById('joy-' + side),
        knob: document.getElementById('joy-' + side + '-knob'),
      };
    }

    function _joyMove(side, cx, cy) {
      const j = joyState[side];
      const el = _joyGetEl(side);
      let dx = cx - j.startX;
      let dy = cy - j.startY;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist > JOY_RADIUS) {
        const scale = JOY_RADIUS / dist;
        dx *= scale; dy *= scale;
      }
      j.dx = dx / JOY_RADIUS;
      j.dy = dy / JOY_RADIUS;
      el.knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    }

    function _joyReset(side) {
      const j = joyState[side];
      const el = _joyGetEl(side);
      j.active = false; j.id = null; j.dx = 0; j.dy = 0;
      el.knob.style.transform = 'translate(-50%,-50%)';
      if (side === 'left') { moveForward = false; moveBackward = false; moveLeft = false; moveRight = false; }
    }

    // Touch start
    function _onTouchStart(e) {
      if (panelOpen) return;
      for (const t of e.changedTouches) {
        // Decide which joystick based on X position
        const side = (t.clientX < window.innerWidth * 0.5) ? 'left' : 'right';
        const j = joyState[side];
        if (j.active) continue; // already tracking
        j.active = true;
        j.id = t.identifier;
        j.startX = t.clientX;
        j.startY = t.clientY;
        j.dx = 0; j.dy = 0;
      }
      e.preventDefault();
    }

    function _onTouchMove(e) {
      if (panelOpen) return;
      for (const t of e.changedTouches) {
        for (const side of ['left','right']) {
          if (joyState[side].id === t.identifier) {
            _joyMove(side, t.clientX, t.clientY);
          }
        }
      }
      // Apply LEFT joystick to movement booleans
      const lx = joyState.left.dx, ly = joyState.left.dy;
      const DEAD = 0.2;
      moveForward  = ly < -DEAD;
      moveBackward = ly >  DEAD;
      moveLeft     = lx < -DEAD;
      moveRight    = lx >  DEAD;

      // RIGHT joystick → camera look (simulate mouse movement)
      const rx = joyState.right.dx, ry = joyState.right.dy;
      if (Math.abs(rx) > DEAD || Math.abs(ry) > DEAD) {
        const sensitivity = 4.0;
        euler.setFromQuaternion(camera.quaternion);
        euler.y -= rx * sensitivity * 0.05;
        euler.x -= ry * sensitivity * 0.05;
        euler.x = Math.max(-Math.PI * 0.33, Math.min(Math.PI * 0.33, euler.x));
        camera.quaternion.setFromEuler(euler);
      }
      e.preventDefault();
    }

    function _onTouchEnd(e) {
      for (const t of e.changedTouches) {
        for (const side of ['left','right']) {
          if (joyState[side].id === t.identifier) _joyReset(side);
        }
      }
      e.preventDefault();
    }

    function mobileInteract() {
      if (panelOpen) { attemptCloseInfoPanel(); return; }
      checkInteraction();
    }
    window.mobileInteract = mobileInteract;

    // ── Show/hide interact button when near a cube ─────────────────────────
    function updateMobileInteractBtn() {
      if (!isMobile) return;
      const btn = document.getElementById('btn-interact');
      if (!btn) return;
      if (panelOpen) {
        btn.style.display = 'none';
      } else if (nearCube) {
        btn.style.display = 'flex';
        btn.style.borderColor = 'rgba(0,255,179,0.9)';
        btn.style.boxShadow   = '0 0 28px rgba(0,255,179,0.5)';
      } else {
        btn.style.display = 'flex';
        btn.style.borderColor = 'rgba(0,224,255,0.4)';
        btn.style.boxShadow   = '0 0 14px rgba(0,224,255,0.15)';
      }
    }

    // Attach touch events after world is ready
    function _attachTouchControls() {
      if (!isMobile) return;
      const canvas = renderer.domElement;
      canvas.addEventListener('touchstart', _onTouchStart, { passive: false });
      canvas.addEventListener('touchmove',  _onTouchMove,  { passive: false });
      canvas.addEventListener('touchend',   _onTouchEnd,   { passive: false });
      canvas.addEventListener('touchcancel',_onTouchEnd,   { passive: false });
      console.log('[Mobile] Touch controls attached');
    }
    window._attachTouchControls = _attachTouchControls;

    // ── Pinch-to-zoom on info panel (mobile) ───────────────────────────────
    let _pinchDist0 = 0;
    document.addEventListener('touchstart', e => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        _pinchDist0 = Math.sqrt(dx*dx + dy*dy);
      }
    });

    // ── Update mobile btn every frame ──────────────────────────────────────
    // Hook into animate loop via a simple interval
    setInterval(updateMobileInteractBtn, 200);


    // ══════════════════════════════════════════════════════════════════════════
    // ── CYBERPUNK CITY SKYLINE ────────────────────────────────────────────────
    // ══════════════════════════════════════════════════════════════════════════
    function buildCitySkyline() {
      const buildingColors = [0x0a1a2e, 0x0d1f35, 0x071220, 0x0b1a30, 0x08152a];
      const accentColors   = [0x00ffb3, 0xff2d9b, 0x00e0ff, 0x8b5cff, 0xffd24a, 0xff4a00];
      const rng = (a, b) => a + Math.random() * (b - a);

      // Place buildings in a ring far from the play area
      const rings = [
        { count: 28, radius: 85,  hMin: 12, hMax: 38, wMin: 3, wMax: 8  },
        { count: 18, radius: 120, hMin: 20, hMax: 60, wMin: 4, wMax: 10 },
        { count: 12, radius: 160, hMin: 30, hMax: 90, wMin: 5, wMax: 14 },
      ];

      rings.forEach(({ count, radius, hMin, hMax, wMin, wMax }) => {
        for (let i = 0; i < count; i++) {
          const angle  = (i / count) * Math.PI * 2 + rng(-0.15, 0.15);
          const r      = radius + rng(-12, 12);
          const x      = Math.cos(angle) * r;
          const z      = Math.sin(angle) * r;
          const h      = rng(hMin, hMax);
          const w      = rng(wMin, wMax);
          const d      = rng(wMin, wMax);

          // Main building body
          const geo  = new THREE.BoxGeometry(w, h, d);
          const col  = buildingColors[Math.floor(Math.random() * buildingColors.length)];
          const mat  = new THREE.MeshStandardMaterial({
            color: col, roughness: 0.85, metalness: 0.3,
            emissive: new THREE.Color(col).multiplyScalar(0.3),
          });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.set(x, h / 2 - 0.5, z);
          mesh.castShadow = false;
          scene.add(mesh);

          // Neon window grid texture on buildings
          _addWindowGrid(mesh, w, h, d, accentColors[Math.floor(Math.random() * accentColors.length)]);

          // Rooftop neon accent light
          if (Math.random() > 0.45) {
            const accent = accentColors[Math.floor(Math.random() * accentColors.length)];
            const light  = new THREE.PointLight(accent, 0.6, 18);
            light.position.set(x + rng(-w/3, w/3), h + 0.5, z + rng(-d/3, d/3));
            scene.add(light);
            // Rooftop beacon mesh
            const bGeo = new THREE.BoxGeometry(0.4, 0.8, 0.4);
            const bMat = new THREE.MeshStandardMaterial({ color: accent, emissive: new THREE.Color(accent), emissiveIntensity: 3 });
            const beacon = new THREE.Mesh(bGeo, bMat);
            beacon.position.copy(light.position);
            scene.add(beacon);
            // Store for pulsing
            beacon.userData.isCityBeacon = true;
            beacon.userData.baseIntensity = 0.6;
            beacon.userData.light = light;
            cityBeacons.push(beacon);
          }

          // Tall antenna on some buildings
          if (Math.random() > 0.7) {
            const aGeo = new THREE.CylinderGeometry(0.05, 0.05, rng(3, 8), 4);
            const aMat = new THREE.MeshStandardMaterial({ color: 0x333355, roughness: 0.9 });
            const ant  = new THREE.Mesh(aGeo, aMat);
            ant.position.set(x, h + aGeo.parameters.height / 2, z);
            scene.add(ant);
          }
        }
      });

      // Ground-level neon signs / strip lights
      for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r     = rng(55, 140);
        const col   = accentColors[Math.floor(Math.random() * accentColors.length)];
        const sGeo  = new THREE.BoxGeometry(rng(2, 6), 0.12, 0.12);
        const sMat  = new THREE.MeshStandardMaterial({ color: col, emissive: new THREE.Color(col), emissiveIntensity: 4 });
        const sign  = new THREE.Mesh(sGeo, sMat);
        sign.position.set(Math.cos(angle) * r, rng(2, 10), Math.sin(angle) * r);
        sign.rotation.y = angle;
        scene.add(sign);
      }

      // Distant mountains / horizon silhouette
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const r     = 220;
        const w2    = rng(30, 60), h2 = rng(30, 70);
        const mGeo  = new THREE.ConeGeometry(w2/2, h2, 5);
        const mMat  = new THREE.MeshStandardMaterial({ color: 0x030810, roughness: 1 });
        const mtn   = new THREE.Mesh(mGeo, mMat);
        mtn.position.set(Math.cos(angle) * r, h2/2 - 2, Math.sin(angle) * r);
        scene.add(mtn);
      }
    }

    function _addWindowGrid(building, w, h, d, accentHex) {
      // Simple emissive planes simulating lit windows
      const accent = new THREE.Color(accentHex);
      const rows = Math.floor(h / 2.5);
      const cols = Math.floor(w / 1.8);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.55) continue; // random dark windows
          const wGeo = new THREE.PlaneGeometry(0.5, 0.7);
          const wMat = new THREE.MeshStandardMaterial({
            color: accent, emissive: accent, emissiveIntensity: 1.2 + Math.random(),
            transparent: true, opacity: 0.7 + Math.random() * 0.3,
          });
          const win = new THREE.Mesh(wGeo, wMat);
          // Place on front face of building
          win.position.set(
            building.position.x + (c - cols/2 + 0.5) * (w/cols),
            (r + 0.5) * (h / rows) - h/2 + building.position.y,
            building.position.z + d/2 + 0.05
          );
          scene.add(win);
        }
      }
    }

    let cityBeacons = [];
    function updateCityBeacons(t) {
      cityBeacons.forEach((b, i) => {
        const pulse = 0.3 + 0.7 * Math.abs(Math.sin(t * 1.2 + i * 0.8));
        if (b.userData.light) b.userData.light.intensity = b.userData.baseIntensity * pulse;
        b.material.emissiveIntensity = 2 + 2 * pulse;
      });
    }

    // Overhead neon grid on ground (city streets)
    function buildStreetGrid() {
      const gridMat = new THREE.MeshStandardMaterial({
        color: 0x001a33, emissive: new THREE.Color(0x003366), emissiveIntensity: 0.4,
        transparent: true, opacity: 0.6,
      });
      const gridGeo = new THREE.PlaneGeometry(300, 300, 30, 30);
      const grid    = new THREE.Mesh(gridGeo, gridMat);
      grid.rotation.x = -Math.PI / 2;
      grid.position.y = -0.48;
      scene.add(grid);

      // Neon road lines
      const roadColors = [0x00ffb3, 0xff2d9b, 0x00e0ff];
      for (let i = -4; i <= 4; i++) {
        if (i === 0) continue;
        const col = roadColors[Math.abs(i) % roadColors.length];
        const lGeo = new THREE.BoxGeometry(0.08, 0.02, 200);
        const lMat = new THREE.MeshStandardMaterial({ color: col, emissive: new THREE.Color(col), emissiveIntensity: 2 });
        const line = new THREE.Mesh(lGeo, lMat);
        line.position.set(i * 12, -0.47, 0);
        scene.add(line);
        const lGeo2 = new THREE.BoxGeometry(200, 0.02, 0.08);
        const line2 = new THREE.Mesh(lGeo2, lMat.clone());
        line2.position.set(0, -0.47, i * 12);
        scene.add(line2);
      }
    }

    // Flying vehicles (distant blinking lights)
    let flyingVehicles = [];
    function buildFlyingVehicles() {
      const colors = [0x00ffb3, 0xff2d9b, 0xffffff, 0x00e0ff, 0xff9900];
      for (let i = 0; i < 18; i++) {
        const col   = colors[Math.floor(Math.random() * colors.length)];
        const vGeo  = new THREE.BoxGeometry(0.3, 0.15, 0.6);
        const vMat  = new THREE.MeshStandardMaterial({ color: col, emissive: new THREE.Color(col), emissiveIntensity: 3 });
        const v     = new THREE.Mesh(vGeo, vMat);
        const angle = Math.random() * Math.PI * 2;
        const r     = 60 + Math.random() * 100;
        v.position.set(Math.cos(angle) * r, 15 + Math.random() * 30, Math.sin(angle) * r);
        v.userData.angle   = angle;
        v.userData.radius  = r;
        v.userData.speed   = 0.08 + Math.random() * 0.18;
        v.userData.height  = v.position.y;
        v.userData.hSpeed  = (Math.random() - 0.5) * 0.3;
        scene.add(v);
        flyingVehicles.push(v);
      }
    }

    function updateFlyingVehicles(t) {
      flyingVehicles.forEach(v => {
        v.userData.angle += v.userData.speed * 0.01;
        const a = v.userData.angle;
        const r = v.userData.radius;
        v.position.x = Math.cos(a) * r;
        v.position.z = Math.sin(a) * r;
        v.position.y = v.userData.height + Math.sin(t * v.userData.hSpeed + a) * 2;
        v.rotation.y = -a + Math.PI / 2;
        // Blink
        v.material.emissiveIntensity = 1.5 + 2 * Math.abs(Math.sin(t * 3 + a * 5));
      });
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ── WALKING PARTICLE TRAIL ────────────────────────────────────────────────
    // ══════════════════════════════════════════════════════════════════════════
    const TRAIL_COUNT = 180;
    const trailGeo    = new THREE.BufferGeometry();
    const trailPos    = new Float32Array(TRAIL_COUNT * 3);
    const trailAlpha  = new Float32Array(TRAIL_COUNT);
    let   trailHead   = 0;
    let   trailActive = false;
    let   lastCamPos  = new THREE.Vector3();

    for (let i = 0; i < TRAIL_COUNT; i++) {
      trailPos[i*3]   = 0; trailPos[i*3+1] = -10; trailPos[i*3+2] = 0;
      trailAlpha[i]   = 0;
    }
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
    trailGeo.setAttribute('alpha',    new THREE.BufferAttribute(trailAlpha, 1));

    const trailMat = new THREE.PointsMaterial({
      color: 0x00ffb3, size: 0.18, transparent: true, opacity: 0.7,
      sizeAttenuation: true, depthWrite: false,
    });
    const trailParticles = new THREE.Points(trailGeo, trailMat);

    function initTrail() {
      scene.add(trailParticles);
    }

    function updateTrail(delta) {
      const moving = moveForward || moveBackward || moveLeft || moveRight;
      if (moving && isLocked && !panelOpen) {
        // Spawn a new particle at feet
        const spread = 0.3;
        trailPos[trailHead*3]   = camera.position.x + (Math.random()-0.5)*spread;
        trailPos[trailHead*3+1] = camera.position.y - 1.4 + Math.random()*0.3;
        trailPos[trailHead*3+2] = camera.position.z + (Math.random()-0.5)*spread;
        trailAlpha[trailHead]   = 1.0;
        trailHead = (trailHead + 1) % TRAIL_COUNT;
      }
      // Fade all particles
      for (let i = 0; i < TRAIL_COUNT; i++) {
        if (trailAlpha[i] > 0) {
          trailAlpha[i] -= delta * 1.4;
          trailPos[i*3+1] += delta * 0.4; // float upward
          if (trailAlpha[i] < 0) trailAlpha[i] = 0;
        }
      }
      trailGeo.attributes.position.needsUpdate = true;
      trailGeo.attributes.alpha.needsUpdate    = true;
      // Update opacity based on average alpha
      const avg = trailAlpha.reduce((a,b)=>a+b,0) / TRAIL_COUNT;
      trailMat.opacity = Math.min(0.8, avg * 8);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ── HEAD BOB ──────────────────────────────────════════════════════════════
    // ══════════════════════════════════════════════════════════════════════════
    let bobTime = 0;
    let bobActive = false;
    const BOB_FREQ = 7.5, BOB_AMP_Y = 0.055, BOB_AMP_X = 0.022;

    function updateHeadBob(delta) {
      const moving = moveForward || moveBackward || moveLeft || moveRight;
      if (moving && isLocked && !panelOpen) {
        bobTime += delta * BOB_FREQ;
        const bobY = Math.sin(bobTime) * BOB_AMP_Y;
        camera.position.y = 1.6 + bobY;
        bobActive = true;
      } else if (bobActive) {
        // Smoothly return to neutral height
        camera.position.y += (1.6 - camera.position.y) * 0.12;
        if (Math.abs(camera.position.y - 1.6) < 0.001) {
          camera.position.y = 1.6;
          bobActive = false;
        }
      }
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ── SOUND EFFECTS ─────────────────────────────────────────────────────────
    // ══════════════════════════════════════════════════════════════════════════
    let _sfxCtx = null;
    function _getSfxCtx() {
      if (!_sfxCtx) _sfxCtx = new (window.AudioContext || window.webkitAudioContext)();
      return _sfxCtx;
    }

    function playSfxEnter() {
      try {
        const ctx = _getSfxCtx();
        // Sci-fi "whoosh + hum" — two oscillators
        const o1  = ctx.createOscillator();
        const o2  = ctx.createOscillator();
        const g1  = ctx.createGain();
        const g2  = ctx.createGain();
        o1.type = 'sine';   o1.frequency.setValueAtTime(180, ctx.currentTime);
        o1.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.18);
        o2.type = 'square'; o2.frequency.setValueAtTime(80,  ctx.currentTime);
        o2.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.22);
        g1.gain.setValueAtTime(0.18, ctx.currentTime);
        g1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        g2.gain.setValueAtTime(0.06, ctx.currentTime);
        g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        o1.connect(g1); g1.connect(ctx.destination);
        o2.connect(g2); g2.connect(ctx.destination);
        o1.start(); o1.stop(ctx.currentTime + 0.35);
        o2.start(); o2.stop(ctx.currentTime + 0.3);
      } catch(e) {}
    }

    function playSfxExit() {
      try {
        const ctx = _getSfxCtx();
        const o   = ctx.createOscillator();
        const g   = ctx.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(520, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.25);
        g.gain.setValueAtTime(0.12, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + 0.28);
      } catch(e) {}
    }

    function playSfxFootstep() {
      try {
        const ctx = _getSfxCtx();
        // Short filtered noise burst
        const buf = ctx.createBuffer(1, ctx.sampleRate * 0.04, ctx.sampleRate);
        const d   = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random()*2-1) * 0.15;
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const filt = ctx.createBiquadFilter();
        filt.type = 'bandpass'; filt.frequency.value = 300; filt.Q.value = 1.5;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.4, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        src.connect(filt); filt.connect(g); g.connect(ctx.destination);
        src.start();
      } catch(e) {}
    }

    let _lastStep = 0;
    function updateFootstepSfx(t) {
      const moving = moveForward || moveBackward || moveLeft || moveRight;
      if (moving && isLocked && !panelOpen) {
        if (t - _lastStep > 0.38) { playSfxFootstep(); _lastStep = t; }
      }
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ── DAY / NIGHT TOGGLE ────────────────────────────────────────────────────
    // ══════════════════════════════════════════════════════════════════════════
    let isDaytime = false;
    function toggleDayNight() {
      isDaytime = !isDaytime;
      const btn = document.getElementById('dn-toggle');
      if (isDaytime) {
        document.body.classList.add('day-mode');
        btn.textContent = '☀ DAY';
        scene.background = new THREE.Color(0x87ceeb);
        scene.fog = new THREE.FogExp2(0x87ceeb, 0.006);
        scene.children.filter(c=>c.isAmbientLight).forEach(l=>{l.intensity=1.2;});
        scene.children.filter(c=>c.isHemisphereLight).forEach(l=>{l.intensity=1.0;});
      } else {
        document.body.classList.remove('day-mode');
        btn.textContent = '🌙 NIGHT';
        scene.background = new THREE.Color(0x06162e);
        scene.fog = new THREE.FogExp2(0x06162e, 0.010);
        scene.children.filter(c=>c.isAmbientLight).forEach(l=>{l.intensity=0.45;});
        scene.children.filter(c=>c.isHemisphereLight).forEach(l=>{l.intensity=0.55;});
      }
    }
    window.toggleDayNight = toggleDayNight;

    // ══════════════════════════════════════════════════════════════════════════
    // ── RESUME DOWNLOAD ───────────────────────────────────────────────────────
    // ══════════════════════════════════════════════════════════════════════════
    function downloadResume() {
      // Download the actual PDF
      const a = document.createElement('a');
      a.href     = RESUME_PDF_DATA;
      a.download = 'Manthan_Jain_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.downloadResume = downloadResume;


    const RESUME_PAGE1 = 'assets/resume-page1.jpg';
    const RESUME_PAGE2 = 'assets/resume-page2.jpg';
    const RESUME_PDF_DATA = 'assets/resume.pdf';

    function viewResume() {
      // Open resume viewer modal with both pages
      document.getElementById('cert-modal-title').textContent = '📄 MANTHAN JAIN — RESUME';
      const content = document.getElementById('cert-modal-content');
      content.innerHTML =
        '<div style="text-align:center;margin-bottom:10px;">' +
          '<button onclick="downloadResume()" style="background:rgba(255,45,155,0.15);border:1px solid rgba(255,45,155,0.6);color:#ff2d9b;font-family:Orbitron,monospace;font-size:12px;padding:8px 20px;cursor:pointer;letter-spacing:0.08em;margin-right:8px;">⬇ DOWNLOAD PDF</button>' +
          '<span style="color:rgba(0,255,179,0.4);font-family:Orbitron,monospace;font-size:10px;">Scroll for page 2 ↓</span>' +
        '</div>' +
        '<img src="' + RESUME_PAGE1 + '" alt="Resume Page 1" style="display:block;width:100%;max-width:780px;margin:0 auto 10px;border:1px solid rgba(0,255,179,0.2);border-radius:2px;">' +
        '<img src="' + RESUME_PAGE2 + '" alt="Resume Page 2" style="display:block;width:100%;max-width:780px;margin:0 auto;border:1px solid rgba(0,255,179,0.2);border-radius:2px;">';
      document.getElementById('cert-modal').classList.add('active');
      document.getElementById('cert-modal').onclick = function(e) {
        if (e.target === this) closeCertModal();
      };
    }
    window.viewResume = viewResume;

    // ══════════════════════════════════════════════════════════════════════════
    // ── CONTACT FORM HANDLER ─────────────────────────────────────────────────
    // ══════════════════════════════════════════════════════════════════════════
    function sendContactForm() {
      const name  = (document.getElementById('cf-name')  || {}).value || '';
      const email = (document.getElementById('cf-email') || {}).value || '';
      const msg   = (document.getElementById('cf-msg')   || {}).value || '';
      if (!name.trim() || !msg.trim()) {
        alert('Please fill in your name and message.');
        return;
      }
      const subject = encodeURIComponent('Portfolio Contact — ' + name);
      const body    = encodeURIComponent(
        'From: ' + name + ' (' + email + ')\n\n' + msg
      );
      window.location.href = 'mailto:manthanmaheshjain@gmail.com?subject=' + subject + '&body=' + body;
      const succ = document.getElementById('cf-success');
      if (succ) { succ.style.display = 'block'; }
    }
    window.sendContactForm = sendContactForm;

    // ── Glitch Typewriter + Audio (Gemini spec) ──────────────────────────────
    const nameTarget  = "MANTHAN JAIN";
    const glitchChars = "!<>-_\/[]{}—=+*^?#________";

    // Lazy getters — audio tags are at end of body, not available at parse time
    function _typeSound() { return document.getElementById("type-sound"); }
    function _bgMusic()   { return document.getElementById("bg-music");   }

    function playTypeClick() {
      try {
        const snd = _typeSound();
        if (!snd) return;
        snd.currentTime = 0;
        snd.volume = 0.15;
        snd.play().catch(() => {});
      } catch(e) {}
    }

    function startBgMusic() {
      try {
        const m = _bgMusic();
        if (!m) return;
        m.volume = 0;
        m.play().catch(() => {});
        let v = 0;
        const fade = setInterval(() => {
          v = Math.min(v + 0.05, 0.32);
          m.volume = v;
          if (v >= 0.38) clearInterval(fade);
        }, 200);
      } catch(e) {}
    }

    function runTypewriter() {
      const el = document.querySelector("#welcome-screen h1");
      if (!el) return;

      const queue = [];
      for (let i = 0; i < nameTarget.length; i++) {
        const start = Math.floor(Math.random() * 12);
        const end   = start + Math.floor(Math.random() * 12);
        queue.push({ to: nameTarget[i], start, end, char: '' });
      }

      let frame = 0;

      function updateGlitch() {
        let output   = '';
        let complete = 0;

        for (let i = 0; i < queue.length; i++) {
          const q = queue[i];
          if (frame >= q.end) {
            complete++;
            output += q.to;
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.28) {
              q.char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
              try { const s=_typeSound(); if(s){s.currentTime=0;s.volume=0.1;s.play().catch(()=>{});} } catch(e){}
            }
            output += `<span style="color:#48ff9e;opacity:0.7">${q.char}</span>`;
          } else {
            output += '';
          }
        }

        el.innerHTML = output + '<span class="cursor-blink">_</span>';

        if (complete !== queue.length) {
          frame++;
          // Fast scramble — 3 seconds total
          const speed = Math.floor(Math.random() * (110 - 60) + 60);
          setTimeout(updateGlitch, speed);
        } else {
          // Settled — clean up flicker
          el.innerHTML = nameTarget + '<span class="cursor-blink">_</span>';
          el.classList.add('finished');
        }
      }

      updateGlitch();
    }

    // Start 1 second after load (matches Gemini spec)
    window.addEventListener('load', () => setTimeout(runTypewriter, 1000));

    // ── Cyberpunk Neon Rain ────────────────────────────────────────────────────
    (function() {
      const canvas = document.getElementById('neon-rain');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth; canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
      const cols = Math.floor(window.innerWidth / 20);
      const drops = Array(cols).fill(0).map(() => Math.random() * -100);
      const chars = 'ｱｲｳｴｵｶｷｸｹｺ0123456789ABCDEF<>{}[]';
      const colors = ['#00ffb3','#ff2d9b','#00e0ff','#8b5cff','#ffd24a'];
      function drawRain() {
        ctx.fillStyle = 'rgba(0,0,0,0.22)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        drops.forEach((y,i) => {
          ctx.fillStyle = colors[i % colors.length];
          ctx.font = '14px Share Tech Mono, monospace';
          ctx.fillText(chars[Math.floor(Math.random()*chars.length)], i*20, y*20);
          if (y*20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i] += 0.5;
        });
      }
      setInterval(drawRain, 50);
    })();

    // ── Cyberpunk Cursor ────────────────────────────────────────────────────────
    const _cursor = document.getElementById('cyber-cursor');
    document.addEventListener('mousemove', e => {
      _cursor.style.left = e.clientX + 'px';
      _cursor.style.top  = e.clientY + 'px';
    });

    // ── Animated Skill Bars ────────────────────────────────────────────────────
    function animateSkillBars() {
      document.querySelectorAll('.skill-fill').forEach(el => {
        el.style.width = '0';
        setTimeout(() => { el.style.width = el.dataset.pct + '%'; }, 100);
      });
    }

    // ── Ambient Music (Web Audio synth — no file needed) ──────────────────────
    let audioCtx = null, musicPlaying = false, musicNodes = [];
    function toggleMusic() {
      // Toggle the Synthwave background music only (no ambient drone)
      const m = _bgMusic();
      if (!m) return;
      if (m.paused) {
        m.play().catch(()=>{});
        document.getElementById('music-btn').textContent = '🔊';
      } else {
        m.pause();
        document.getElementById('music-btn').textContent = '🔇';
      }
    }
    function startAmbient() {
      if (!audioCtx) return;
      // Drone pads — cyberpunk feel
      [[55,0.06],[110,0.04],[165,0.025],[220,0.015],[82.4,0.035]].forEach(([freq, gain]) => {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();
        osc.type = 'sawtooth'; osc.frequency.value = freq;
        filter.type = 'lowpass'; filter.frequency.value = 800; filter.Q.value = 2;
        g.gain.value = gain;
        osc.connect(filter); filter.connect(g); g.connect(audioCtx.destination);
        osc.start(); musicNodes.push(osc);
        // Slow LFO on gain
        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();
        lfo.frequency.value = 0.15 + Math.random()*0.1;
        lfoGain.gain.value = gain * 0.5;
        lfo.connect(lfoGain); lfoGain.connect(g.gain);
        lfo.start(); musicNodes.push(lfo);
      });
      // Pulse beat
      function pulse() {
        if (!musicPlaying) return;
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.value = 60;
        g.gain.setValueAtTime(0.12, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(); o.stop(audioCtx.currentTime + 0.3);
        setTimeout(pulse, 800);
      }
      pulse();
    }
    window.toggleMusic = toggleMusic;

    // ── Cinematic Camera Fly-In ────────────────────────────────────────────────
    let cameraFlyActive = false;
    let cameraFlyTarget = null, cameraFlyStart = null;
    let cameraFlyProgress = 0, cameraFlyDuration = 0.9;
    let cameraFlyCallback = null;
    let cameraFlyStartPos = null, cameraFlyStartQuat = null;

    function startCameraFlyIn(targetPos, onDone) {
      cameraFlyActive = true;
      cameraFlyProgress = 0;
      cameraFlyStartPos = camera.position.clone();
      cameraFlyStartQuat = camera.quaternion.clone();
      cameraFlyTarget = targetPos.clone();
      cameraFlyCallback = onDone;
    }

    function updateCameraFly(delta) {
      if (!cameraFlyActive) return;
      cameraFlyProgress = Math.min(1, cameraFlyProgress + delta / cameraFlyDuration);
      const t = 1 - Math.pow(1 - cameraFlyProgress, 4); // ease-out-quart
      camera.position.lerpVectors(cameraFlyStartPos, cameraFlyTarget, t);
      if (cameraFlyProgress >= 1) {
        cameraFlyActive = false;
        if (cameraFlyCallback) { cameraFlyCallback(); cameraFlyCallback = null; }
      }
    }

    // ── Cube Hover Glow + Spin Speed Up ───────────────────────────────────────
    let hoveredCube = null;
    const cubeGlowMeshes = new WeakMap();

    function updateCubeHover() {
      raycaster.setFromCamera(new THREE.Vector2(0,0), camera);
      const hits = raycaster.intersectObjects(interactables, true);
      let newHovered = null;
      if (hits.length > 0 && hits[0].distance < 12) {
        let obj = hits[0].object;
        while (obj && !obj.userData.type) obj = obj.parent;
        if (obj && obj.userData.type === 'interactable') newHovered = obj;
      }
      if (newHovered !== hoveredCube) {
        // Un-hover previous
        if (hoveredCube) {
          const gm = hoveredCube.getObjectByName('glowMesh');
          if (gm) gm.material.opacity = 0.10;
        }
        hoveredCube = newHovered;
        if (hoveredCube) {
          const gm = hoveredCube.getObjectByName('glowMesh');
          if (gm) gm.material.opacity = 0.30;
        }
      }
    }

    // ── Neon Light Beams between cubes ────────────────────────────────────────
    const beamPulses = [];

    function createNeonBeams() {
      const home = SECTIONS.find(s => s.id === 'home');
      SECTIONS.filter(s => s.id !== 'home').forEach((s, idx) => {
        const points = [];
        const segments = 20;
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          points.push(new THREE.Vector3(
            home.x + (s.x - home.x) * t,
            0.15,
            home.z + (s.z - home.z) * t
          ));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({
          color: new THREE.Color(s.glow),
          transparent: true, opacity: 0
        });
        const beam = new THREE.Line(geo, mat);
        scene.add(beam);

        // Animate beam pulse
        let phase = idx * 0.4;
        beamPulses.push({ line: beam, phase, color: s.glow, speed: 0.8 + Math.random()*0.4 });

        // Moving dot along beam
        const dotGeo = new THREE.SphereGeometry(0.12, 8, 8);
        const dotMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(s.glow) });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        scene.add(dot);
        beamPulses[beamPulses.length-1].dot = dot;
        beamPulses[beamPulses.length-1].home = new THREE.Vector3(home.x, 0.15, home.z);
        beamPulses[beamPulses.length-1].target = new THREE.Vector3(s.x, 0.15, s.z);
      });
    }

    function updateBeamPulses(t) {
      beamPulses.forEach(b => {
        b.phase += 0.016 * b.speed;
        const pulse = (Math.sin(b.phase) + 1) / 2;
        b.line.material.opacity = pulse * 0.55;
        // Move dot
        const dotT = (b.phase % (Math.PI * 2)) / (Math.PI * 2);
        b.dot.position.lerpVectors(b.home, b.target, dotT);
        b.dot.position.y = 0.25 + Math.sin(b.phase * 2) * 0.08;
        b.dot.material.color.set(new THREE.Color(b.color));
      });
    }

    // ── Floating Orbs ─────────────────────────────────────────────────────────
    const floatingOrbs = [];
    function createFloatingOrbs() {
      const orbColors = ['#00ffb3','#ff2d9b','#00e0ff','#8b5cff','#ffd24a'];
      for (let i = 0; i < 18; i++) {
        const geo = new THREE.SphereGeometry(0.18 + Math.random()*0.22, 12, 12);
        const col = orbColors[i % orbColors.length];
        const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(col), transparent: true, opacity: 0.7 });
        const orb = new THREE.Mesh(geo, mat);
        orb.position.set(
          (Math.random()-0.5)*80,
          2 + Math.random()*12,
          (Math.random()-0.5)*80
        );
        scene.add(orb);
        floatingOrbs.push({ mesh: orb, phase: Math.random()*Math.PI*2, speed: 0.3+Math.random()*0.4, amp: 0.5+Math.random() });

        // Glow sprite around orb
        const glowGeo = new THREE.SphereGeometry(0.55 + Math.random()*0.3, 8, 8);
        const glowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(col), transparent: true, opacity: 0.12, side: THREE.BackSide });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        orb.add(glow);
      }
    }

    function updateFloatingOrbs(t) {
      floatingOrbs.forEach(o => {
        o.mesh.position.y = 2 + Math.sin(t * o.speed + o.phase) * o.amp + 4;
        o.mesh.rotation.y += 0.01;
        o.mesh.material.opacity = 0.5 + Math.sin(t * o.speed * 1.3 + o.phase) * 0.25;
      });
    }

    window.addEventListener('load', init);
  
