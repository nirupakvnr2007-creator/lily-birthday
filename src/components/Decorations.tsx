import React, { useEffect, useRef } from 'react';

export function CoquetteBow({ className = 'w-16 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Left ribbon tail */}
      <path
        d="M57 38C45 48 33 59 24 67L35 64L42 69C48 58 54 46 58 40Z"
        fill="#E8C2D4"
        stroke="#9C6580"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Right ribbon tail */}
      <path
        d="M63 38C75 48 87 59 96 67L85 64L78 69C72 58 66 46 62 40Z"
        fill="#E8C2D4"
        stroke="#9C6580"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Left loop */}
      <path
        d="M56 32C40 12 12 10 10 28C8 43 32 45 55 36Z"
        fill="#FCE7F0"
        stroke="#9C6580"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M52 33C38 22 22 22 20 30"
        stroke="#9C6580"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* Right loop */}
      <path
        d="M64 32C80 12 108 10 110 28C112 43 88 45 65 36Z"
        fill="#FCE7F0"
        stroke="#9C6580"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M68 33C82 22 98 22 100 30"
        stroke="#9C6580"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* Center knot */}
      <rect
        x="52"
        y="25"
        width="16"
        height="16"
        rx="6"
        fill="#E8C2D4"
        stroke="#9C6580"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function VintageLockIllustration({ className = 'w-20 h-20' }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden="true">
      {/* Decorative leaves */}
      <path
        d="M16 66C10 56 14 44 24 41C24 52 21 60 16 66Z"
        fill="#DCCEF4"
        stroke="#9C6580"
        strokeWidth="1.4"
      />
      <path
        d="M80 66C86 56 82 44 72 41C72 52 75 60 80 66Z"
        fill="#DCCEF4"
        stroke="#9C6580"
        strokeWidth="1.4"
      />
      {/* Shackle */}
      <path
        d="M32 42V29C32 19.6 39.2 12 48 12C56.8 12 64 19.6 64 29V42"
        stroke="#9C6580"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Padlock body */}
      <rect
        x="24"
        y="40"
        width="48"
        height="40"
        rx="12"
        fill="#FCE7F0"
        stroke="#9C6580"
        strokeWidth="2.2"
      />
      {/* Inner stitched border */}
      <rect
        x="29"
        y="45"
        width="38"
        height="30"
        rx="8"
        stroke="#E8C2D4"
        strokeWidth="1.3"
        strokeDasharray="3 3"
      />
      {/* Heart keyhole */}
      <path
        d="M48 67C48 67 39 61.5 39 55.8C39 52.8 41.3 50.5 44.1 50.5C45.9 50.5 47.4 51.4 48 52.7C48.6 51.4 50.1 50.5 51.9 50.5C54.7 50.5 57 52.8 57 55.8C57 61.5 48 67 48 67Z"
        fill="#9C6580"
      />
    </svg>
  );
}

export function BirthdayCakeIllustration({
  lit = true,
  className = 'w-56 h-56',
}: {
  lit?: boolean;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 240 230" fill="none" className={className} aria-hidden="true">
      {/* Cake stand */}
      <ellipse cx="120" cy="202" rx="84" ry="11" fill="#E7D9C8" stroke="#9C6580" strokeWidth="1.6" />
      <path d="M108 188H132L138 201H102L108 188Z" fill="#E8C2D4" stroke="#9C6580" strokeWidth="1.5" />
      <ellipse cx="120" cy="186" rx="76" ry="9" fill="#FFF6EF" stroke="#9C6580" strokeWidth="1.6" />

      {/* Bottom tier */}
      <rect x="56" y="132" width="128" height="52" rx="14" fill="#FCE7F0" stroke="#9C6580" strokeWidth="1.8" />
      {/* Frosting scallops on bottom tier */}
      <path
        d="M56 144C65 154 75 154 84 144C93 154 103 154 112 144C121 154 131 154 140 144C149 154 159 154 168 144C174 150 179 150 184 144"
        stroke="#9C6580"
        strokeWidth="1.6"
        fill="#FFF6EF"
      />
      {/* Top tier */}
      <rect x="76" y="88" width="88" height="44" rx="12" fill="#DCCEF4" stroke="#9C6580" strokeWidth="1.8" />
      <path
        d="M76 98C84 107 93 107 101 98C109 107 118 107 126 98C134 107 143 107 151 98C156 104 160 104 164 98"
        stroke="#9C6580"
        strokeWidth="1.5"
        fill="#FFF6EF"
      />

      {/* Little bow on cake front */}
      <circle cx="120" cy="164" r="4" fill="#9C6580" />
      <path d="M116 164C106 157 101 166 111 169Z" fill="#E8C2D4" stroke="#9C6580" strokeWidth="1.2" />
      <path d="M124 164C134 157 139 166 129 169Z" fill="#E8C2D4" stroke="#9C6580" strokeWidth="1.2" />

      {/* Number 20 badge in center */}
      <text
        x="120"
        y="121"
        textAnchor="middle"
        fill="#3B1E2D"
        fontSize="16"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="700"
      >
        20
      </text>

      {/* Three candles */}
      {[94, 120, 146].map((x, idx) => (
        <g key={x}>
          <rect
            x={x - 4}
            y="54"
            width="8"
            height="34"
            rx="3"
            fill={idx === 1 ? '#FCE7F0' : '#FFF6EF'}
            stroke="#9C6580"
            strokeWidth="1.5"
          />
          <line x1={x} y1="48" x2={x} y2="54" stroke="#3B1E2D" strokeWidth="1.4" />
          {lit && (
            <g className="animate-candle-flicker">
              <circle cx={x} cy="40" r="10" fill="#FDE68A" opacity="0.35" />
              <path
                d={`M${x} 31C${x - 4.5} 37 ${x - 4} 44 ${x} 46C${x + 4} 44 ${x + 4.5} 37 ${x} 31Z`}
                fill="#F59E0B"
              />
              <path
                d={`M${x} 35C${x - 2} 39 ${x - 2} 43 ${x} 44.5C${x + 2} 43 ${x + 2} 39 ${x} 35Z`}
                fill="#FEF3C7"
              />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}

export function BotanicalSprig({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M12 52C24 38 38 24 52 12" stroke="#9C6580" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 40C18 32 19 24 26 22C29 29 28 36 24 40Z" fill="#FCE7F0" stroke="#9C6580" strokeWidth="1.2" />
      <path d="M36 28C43 29 48 35 45 41C38 40 35 34 36 28Z" fill="#DCCEF4" stroke="#9C6580" strokeWidth="1.2" />
      <circle cx="51" cy="13" r="4" fill="#E8C2D4" stroke="#9C6580" strokeWidth="1.2" />
    </svg>
  );
}

export function WaxSealBadge({ className = 'w-14 h-14' }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden="true">
      <path
        d="M36 6C41 6 45 9 49 8C54 7 58 11 60 15C62 20 66 23 65 28C64 33 67 38 64 43C61 47 62 53 58 56C54 59 50 64 45 63C40 62 36 66 31 64C26 62 21 63 18 59C15 55 10 52 10 47C10 42 6 37 8 32C10 27 8 21 12 18C16 15 18 9 23 9C28 9 31 6 36 6Z"
        fill="#9C6580"
      />
      <circle cx="36" cy="36" r="20" stroke="#FCE7F0" strokeWidth="1.3" opacity="0.6" />
      <path
        d="M36 46C36 46 25 39.2 25 32.3C25 28.8 27.8 26 31.3 26C33.4 26 35.2 27.1 36 28.7C36.8 27.1 38.6 26 40.7 26C44.2 26 47 28.8 47 32.3C47 39.2 36 46 36 46Z"
        fill="#FCE7F0"
      />
    </svg>
  );
}

export function AmbientFloaters({ dark = false }: { dark?: boolean }) {
  const items = [
    { left: '7%', top: '14%', size: 14, delay: '0s', type: 'heart' },
    { left: '89%', top: '18%', size: 12, delay: '1.1s', type: 'star' },
    { left: '14%', top: '74%', size: 11, delay: '2.2s', type: 'star' },
    { left: '84%', top: '76%', size: 15, delay: '0.7s', type: 'heart' },
    { left: '48%', top: '9%', size: 10, delay: '1.8s', type: 'star' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="animate-float-slow absolute opacity-60"
          style={{ left: item.left, top: item.top, animationDelay: item.delay }}
        >
          {item.type === 'heart' ? (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill={dark ? '#E8C2D4' : '#9C6580'}>
              <path d="M12 21s-8.5-5.3-8.5-11.4C3.5 6.3 6.1 4 9.1 4c1.8 0 2.9.9 2.9 2.1C12 4.9 13.1 4 14.9 4c3 0 5.6 2.3 5.6 5.6C20.5 15.7 12 21 12 21z" />
            </svg>
          ) : (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill={dark ? '#FCE7F0' : '#DCCEF4'}>
              <path d="M12 2l2.3 6.9L21 11.2l-6.7 2.3L12 20.5l-2.3-7L3 11.2l6.7-2.3L12 2z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export function ConfettiBurst({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#FCE7F0', '#E8C2D4', '#DCCEF4', '#9C6580', '#FDE68A', '#FFF6EF'];
    const pieces = Array.from({ length: 80 }, () => ({
      x: canvas.width * (0.2 + Math.random() * 0.6),
      y: canvas.height * 0.42,
      vx: (Math.random() - 0.5) * 11,
      vy: -Math.random() * 10 - 3,
      size: 5 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.22,
      alpha: 1,
    }));

    let frameId = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.24;
        p.vx *= 0.99;
        p.rotation += p.vRot;
        p.alpha -= 0.0085;
        if (p.alpha > 0 && p.y < canvas.height + 20) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
          ctx.restore();
        }
      }
      if (alive) {
        frameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    frameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameId);
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      aria-hidden="true"
    />
  );
}
