// ===== MODERN INTERACTIVE SCRIPT =====
// ROMAN URDU - FULL INTERACTIVITY WITH SMOOTH ANIMATIONS

(function() {
    'use strict';

    // ===== MODERN REQUIREMENT DATA (ROMAN URDU) =====
    const requirementData = [
        {
            icon: 'fas fa-microchip',
            title: 'CPU · PROCESSOR',
            desc: 'Intel ya AMD processor virtualization ke saath hona chahiye',
            explanatio: 'Optional: CPU mein Intel VT-x ya AMD-V hona chahiye. BlueStacks 5 virtualization se tez chalta hai.'
        },
        {
            icon: 'fas fa-memory',
            title: 'RAM · MEMORY',
            desc: 'Kam se kam 4GB · 8GB thik hai',
            explanatio: '4GB RAM zaruri hai, lekin 8GB ho to Free Fire bilkul smooth khel sakte ho.'
        },
        {
            icon: 'fas fa-hdd',
            title: 'STORAGE · SPACE',
            desc: '5GB space avaliable honi chahiye, SSD use karo to aur acha war na hard drive bi thik hai',
            explanatio: 'BlueStacks 5 aur Free Fire dono mil kar ~5GB space leta hai. SSD se loading tez hoti hai.'
        },
        {
            icon: 'fas fa-desktop',
            title: 'GRAPHICS · CARD',
            desc: 'DirectX 11 / OpenGL 4.0+',
            explanatio: 'Graphics driver update rakho. BlueStacks 5 graphics acceleration use karta hai game ke liye.'
        },
        {
            icon: 'fas fa-window-maximize',
            title: 'OPERATING SYSTEM',
            desc: 'Windows 10/11 (64-bit) wali huo',
            explanatio: 'BlueStacks 5 Windows 10/11 64-bit par best chalta hai. Purana OS ho to problem ho sakti hai.'
        },
        // {
        //     icon: 'fas fa-shield',
        //     title: 'VIRTUALIZATION',
        //     desc: 'BIOS mein virtualization ON karo Click here!',
        //     explanatio: 'Virtualization ko BIOS mein enable karo. Ye BlueStacks 5 ki performance ke liye bohot zaruri hai.'
        // }
        
        
        {
    icon: 'fas fa-shield',
    title: 'VIRTUALIZATION',
    // We use a link with an onclick stopPropagation to ensure the card click doesn't interfere
    desc: 'BIOS mein virtualization ON karo, tap click here to watch how to enable virtualizaation <a href="https://youtu.be/yIkb1b2ZBSw?si=SeJNu8ajGSeMC3j_" target="_blank" class="req-link" onclick="event.stopPropagation();">Click here! </a>',
    explanatio: 'Virtualization ko BIOS mein enable karo. Ye BlueStacks 5 ki performance ke liye bohot zaruri hai.'
}
    ];

    // ===== MODERN STEP DATA (ROMAN URDU) =====
    const stepData = [
        {
            num: '1',
            title: 'BlueStacks 5 download karo.',
            desc: 'Guide ko follow karta rho.',
            detail: 'Sab sa upper download wala button par click kar ka BlueStacks 5 download karo.'
        },
         {
            num: '2',
            title: 'Install krae.',
            desc: 'Download ma ja kar bluestack 5 ki file par click karka is ko install karo.',
            detail: 'Ya kuch time la ga intall hona ma.'
        },
        {
            num: '3',
            title: ' Play store pa google acount login kra.',
            desc: 'Apne Google account se login karo.',
            detail: 'BlueStacks 5 kholo, Google Play Store kholo, aur apna email/password dalo.'
        },
        {
            num: '4',
            title: 'Free Fire dhoondo.',
            desc: 'Play Store mein “Free Fire” search karo.',
            detail: 'Play Store mein jaakar “Free Fire MAX” ya “Free Fire” likho. Garena Free Fire wala select karo.'
        },
        {
            num: '5',
            title: 'Install karo.',
            desc: 'Install button dabao aur intezaar karo.',
            detail: 'BlueStacks 5 khud Free Fire download aur install karega. Thoda sabar karo.'
        },
        {
            num: '6',
            title: 'Game open karo or khallo.',
            desc: 'BlueStacks home se Free Fire start karo.',
            detail: 'Install hone ke baad “Open” dabao. Settings set karo aur battle ready ho jao!.'
        }
    ];

    // ===== RENDER REQUIREMENTS WITH MODERN CARDS =====
    const reqGrid = document.getElementById('reqGrid');
    function renderRequirements() {
        if (!reqGrid) return;
        let html = '';
        requirementData.forEach(req => {
            html += `<div class="req-item">
                        <div class="req-icon"><i class="${req.icon}"></i></div>
                        <div class="req-title">${req.title}</div>
                        <div class="req-desc">${req.desc}</div>
                        <div class="req-explanation">
                            <i class="fas fa-scroll"></i> ${req.explanatio}
                        </div>
                    </div>`;
        });
        reqGrid.innerHTML = html;
        
        // Add entrance animation
        setTimeout(() => {
            document.querySelectorAll('.req-item').forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, i * 100);
            });
        }, 100);
    }

    // ===== RENDER STEPS WITH MODERN CARDS =====
    const stepsContainer = document.getElementById('stepsContainer');
    function renderSteps() {
        if (!stepsContainer) return;
        let stepsHtml = '';
        stepData.forEach(step => {
            stepsHtml += `<div class="step-card">
                            <div class="step-num">${step.num}</div>
                            <div class="step-content">
                                <div class="step-title">${step.title}</div>
                                <div class="step-desc">${step.desc}</div>
                                <div class="step-detail">
                                    <i class="fas fa-arrow-right"></i> ${step.detail}
                                </div>
                            </div>
                        </div>`;
        });
        stepsContainer.innerHTML = stepsHtml;
        
        // Stagger animation
        setTimeout(() => {
            document.querySelectorAll('.step-card').forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0)';
                }, i * 150);
            });
        }, 200);
    }

    // ===== MODERN TOGGLE WITH SMOOTH TRANSITION =====
    function initToggle() {
        const toggleBtn = document.getElementById('toggleReqBtn');
        const toggleStatus = document.getElementById('toggleStatus');
        
        if (!toggleBtn || !toggleStatus) return;

        let explanationsVisible = true;

        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const reqItems = document.querySelectorAll('.req-item');
            
            if (explanationsVisible) {
                reqItems.forEach((item, i) => {
                    const expl = item.querySelector('.req-explanation');
                    if (expl) {
                        expl.style.transition = 'all 0.3s';
                        expl.style.opacity = '0';
                        expl.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            expl.style.display = 'none';
                        }, 300);
                    }
                });
                toggleStatus.innerHTML = '<i class="fas fa-eye-slash"></i>Gmail chupai ga rhi hai.';
                explanationsVisible = false;
            } else {
                reqItems.forEach((item, i) => {
                    const expl = item.querySelector('.req-explanation');
                    if (expl) {
                        expl.style.display = 'block';
                        setTimeout(() => {
                            expl.style.opacity = '1';
                            expl.style.transform = 'translateY(0)';
                        }, 50);
                    }
                });
                toggleStatus.innerHTML = '<i class="fas fa-eye"></i> Dynasbrothers@gmail.com';
                explanationsVisible = true;
            }
            
            // Button feedback
            const btn = e.currentTarget;
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 200);
        });
    }

    // ===== ADD PARALLAX EFFECT ON CARDS =====
    function initParallax() {
        const cards = document.querySelectorAll('.glass-card');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardX = (rect.left + rect.width / 2) / window.innerWidth;
                const cardY = (rect.top + rect.height / 2) / window.innerHeight;
                
                const moveX = (x - cardX) * 10;
                const moveY = (y - cardY) * 10;
                
                card.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateY(-5px)`;
            });
        });
    }

    // ===== INITIALIZE EVERYTHING =====
    function init() {
        renderRequirements();
        renderSteps();
        initToggle();
        // Uncomment for 3D parallax (heavy)
        // initParallax();
        
        // Add dynamic year
        const yearSpan = document.querySelector('.trust-badges span:last-child');
        if (yearSpan) {
            yearSpan.innerHTML = `<i class="fas fa-clock"></i> updated ${new Date().getFullYear()}`;
        }
    }

    window.addEventListener('DOMContentLoaded', init);
})();