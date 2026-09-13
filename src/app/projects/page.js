import ProjectCard from '@/components/ProjectCard';

/* ── Screenshot art components ── */

function NuvotonArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '.6rem', padding: '1rem' }}>
      <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1.5px solid var(--accent-line)', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '1.3rem', color: 'var(--accent)', fontWeight: 500 }}>3</span>
        <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(74,222,128,.25)', border: '1px solid rgba(74,222,128,.5)' }} />
        <div style={{ position: 'absolute', bottom: '-2px', left: '4px', width: '9px', height: '9px', borderRadius: '50%', background: 'var(--accent-mid)', border: '1px solid var(--accent-line)' }} />
      </div>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--accent)', letterSpacing: '.12em' }}>LIVE COUNT: 3 PERSONS</span>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
        {[{ l: 'mAP@0.5', v: '0.979', c: '#4ade80' }, { l: 'Inference', v: '22 FPS', c: '#4ade80' }, { l: 'NPU', v: 'Ethos-U55', c: 'var(--accent)' }].map(({ l, v, c }) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--text2)' }}>
            <span>{l}</span><span style={{ color: c }}>{v}</span>
          </div>
        ))}
        <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden', marginTop: '.1rem' }}>
          <div style={{ width: '98%', height: '100%', background: 'var(--accent)', borderRadius: '2px', opacity: .7 }} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>Industry Project</div>
    </div>
  );
}

function RoboticsArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.6rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.4rem .6rem', display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.2rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--text2)' }}>TELEOPERATIONS</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: '.55rem', color: '#4ade80' }}>● HEALTH: GOOD</span>
      </div>
      <div style={{ display: 'flex', gap: '.4rem', flex: 1 }}>
        <div style={{ flex: 2, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '3px' }} />
        <div style={{ flex: 1, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.5rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: '#4ade80', fontWeight: 600 }}>GOOD</span>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'var(--text3)' }}>Comm stable</div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '.25rem', marginTop: '.1rem' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'var(--text3)' }}>Latency: 3ms</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'var(--text3)' }}>Clients: 1</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>SJSU Robotics</div>
    </div>
  );
}

function SCEventsArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.2rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--accent)', fontWeight: 600 }}>SCEvents</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)' }}>sce.sjsu.edu/events</span>
      </div>
      <div style={{ display: 'flex', gap: '.4rem', flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
          {['SCEHacks', 'Industry Talk', 'Company Tour'].map((name, i) => (
            <div key={name} style={{ padding: '.4rem .5rem', background: i === 0 ? 'var(--accent-soft)' : 'var(--surface2)', border: `1px solid ${i === 0 ? 'var(--accent-line)' : 'var(--border)'}`, borderRadius: '3px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: i === 0 ? 'var(--accent)' : 'var(--text2)', fontWeight: i === 0 ? 600 : 400 }}>{name}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'var(--text3)', marginTop: '.15rem' }}>GET /events/:id ✓</div>
            </div>
          ))}
        </div>
        <div style={{ width: '80px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.5rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)', borderBottom: '1px solid var(--border)', paddingBottom: '.25rem' }}>Stack</div>
          {['Go · Gin', 'MongoDB', 'Redis', 'Kafka', 'Docker'].map(t => (
            <div key={t} style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'var(--text2)' }}>{t}</div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>SCE Club</div>
    </div>
  );
}

function SpartanArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.2rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--accent)', fontWeight: 600 }}>SpartanClubConnect</span>
        <div style={{ display: 'flex', gap: '.4rem' }}>
          {['Clubs', 'Events'].map(t => <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)' }}>{t}</span>)}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', flex: 1 }}>
        <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-mid)', borderRadius: '3px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '.4rem', gap: '.2rem' }}>
          <div style={{ height: '5px', background: 'var(--accent-line)', borderRadius: '1px', width: '70%' }} />
          <div style={{ height: '4px', background: 'var(--border)', borderRadius: '1px', width: '50%' }} />
          <div style={{ marginTop: '.15rem', width: '36px', height: '14px', background: 'var(--accent)', borderRadius: '2px', opacity: .7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.45rem', color: 'white' }}>RSVP</span>
          </div>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px', opacity: 1 - i * 0.2 }} />
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>CS157A · DB Systems</div>
    </div>
  );
}

function MeetingAgentArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.75rem', display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.4rem .6rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', marginBottom: '.25rem' }}>
        <div style={{ height: '8px', width: '90px', borderRadius: '2px', background: 'var(--border)' }} />
        <div style={{ marginLeft: 'auto', width: '70px', height: '20px', background: 'var(--accent)', borderRadius: '3px', opacity: .8 }} />
      </div>
      <div style={{ display: 'flex', gap: '.4rem', flex: 1 }}>
        <div style={{ flex: 1, background: 'var(--accent-soft)', border: '1px solid var(--accent-mid)', borderRadius: '3px' }} />
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
          {[{ label: 'Summary', color: 'var(--accent)' }, { label: 'Action Items', color: 'var(--accent)' }].map(({ label, color }) => (
            <div key={label} style={{ height: '22px', background: 'var(--accent-soft)', border: '1px solid var(--accent-mid)', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 .5rem' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color }}>{label}</span>
            </div>
          ))}
          <div style={{ display: 'flex', gap: '.25rem' }}>
            <div style={{ flex: 1, height: '14px', borderRadius: '3px', background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.2)' }} />
            <div style={{ width: '36px', height: '14px', borderRadius: '3px', background: 'rgba(251,191,36,.1)', border: '1px solid rgba(251,191,36,.2)' }} />
          </div>
          <div style={{ height: '20px', background: 'rgba(251,191,36,.08)', border: '1px solid rgba(251,191,36,.2)', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 .5rem' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: '#f59e0b' }}>Blockers</span>
          </div>
          <div style={{ height: '20px', background: 'rgba(74,222,128,.06)', border: '1px solid rgba(74,222,128,.15)', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 .5rem' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: '#4ade80' }}>Follow-up</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>NVIDIA Hackathon</div>
    </div>
  );
}

function StockArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      <div style={{ display: 'flex', gap: '.4rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--text3)' }}>
        <span style={{ color: 'var(--text2)' }}>AAPL</span>
        <span>TSLA</span>
        <span style={{ color: 'var(--accent)' }}>NVDA ▲</span>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <svg viewBox="0 0 120 50" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(167,139,250,0.3)" />
              <stop offset="100%" stopColor="rgba(167,139,250,0)" />
            </linearGradient>
          </defs>
          <path d="M0,42 L12,34 L24,36 L36,24 L48,26 L60,18 L72,22 L84,12 L96,14 L108,8 L120,10 L120,50 L0,50Z" fill="url(#cg)" />
          <path d="M0,42 L12,34 L24,36 L36,24 L48,26 L60,18 L72,22 L84,12 L96,14 L108,8 L120,10" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity=".8" />
        </svg>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.3rem' }}>
        <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-mid)', borderRadius: '3px', padding: '.3rem .4rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)' }}>Price</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--accent)' }}>$487</div>
        </div>
        <div style={{ background: 'rgba(74,222,128,.06)', border: '1px solid rgba(74,222,128,.15)', borderRadius: '3px', padding: '.3rem .4rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)' }}>Chg</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: '#4ade80' }}>+2.4%</div>
        </div>
        <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px', padding: '.3rem .4rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)' }}>Vol</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--text2)' }}>42M</div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>SCE Club</div>
    </div>
  );
}

function ProfSupportArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.2rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--accent)', fontWeight: 600 }}>Prof-Support</span>
        <div style={{ display: 'flex', gap: '.35rem' }}>
          {['Profiles', 'Reports', 'Languages'].map(t => (
            <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'var(--text3)' }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '.4rem', flex: 1 }}>
        {/* Student list */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)', marginBottom: '.1rem' }}>Students</div>
          {[
            { name: 'Alice Wang',   status: 'whitelist' },
            { name: 'Bob Chen',     status: 'whitelist' },
            { name: 'Carol Kim',    status: 'blacklist' },
          ].map(({ name, status }) => (
            <div key={name} style={{
              padding: '.3rem .5rem', borderRadius: '3px',
              background: status === 'whitelist' ? 'rgba(74,222,128,.06)' : 'rgba(239,68,68,.06)',
              border: `1px solid ${status === 'whitelist' ? 'rgba(74,222,128,.2)' : 'rgba(239,68,68,.18)'}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text2)' }}>{name}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '.46rem', color: status === 'whitelist' ? '#4ade80' : 'rgba(239,68,68,.8)' }}>
                {status === 'whitelist' ? '✓' : '✗'}
              </span>
            </div>
          ))}
        </div>
        {/* Reports panel */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)', marginBottom: '.1rem' }}>Reports</div>
          <div style={{ display: 'flex', gap: '.2rem', marginBottom: '.2rem' }}>
            {['All', 'Whitelist', 'Blacklist'].map((f, i) => (
              <div key={f} style={{
                flex: 1, padding: '.2rem .25rem', borderRadius: '2px', textAlign: 'center',
                background: i === 1 ? 'var(--accent-soft)' : 'var(--surface2)',
                border: `1px solid ${i === 1 ? 'var(--accent-line)' : 'var(--border)'}`,
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '.46rem', color: i === 1 ? 'var(--accent)' : 'var(--text3)' }}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px', padding: '.4rem .5rem', display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
            <div style={{ height: '4px', background: 'var(--accent-line)', borderRadius: '1px', width: '80%' }} />
            <div style={{ height: '4px', background: 'var(--border)', borderRadius: '1px', width: '60%' }} />
            <div style={{ height: '4px', background: 'var(--border)', borderRadius: '1px', width: '70%' }} />
          </div>
          <div style={{ padding: '.3rem .5rem', background: 'rgba(74,222,128,.06)', border: '1px solid rgba(74,222,128,.2)', borderRadius: '3px', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: '#4ade80' }}>↓ Export CSV</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>CS151 · Team Project</div>
    </div>
  );
}

function JobTrackerArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      <div style={{ display: 'flex', gap: '.4rem', alignItems: 'center' }}>
        <div style={{ flex: 1, height: '18px', background: 'var(--accent-soft)', border: '1px solid var(--accent-mid)', borderRadius: '3px' }} />
        <div style={{ width: '48px', height: '18px', background: 'var(--accent)', borderRadius: '3px', opacity: .7 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem', flex: 1 }}>
        {[
          { w: '70%', score: '95%', sc: '#4ade80', sb: 'rgba(74,222,128,.25)', sbg: 'rgba(74,222,128,.1)', bg: 'var(--accent-soft)', b: 'var(--accent-mid)' },
          { w: '55%', score: '82%', sc: '#f59e0b', sb: 'rgba(251,191,36,.25)', sbg: 'rgba(251,191,36,.1)', bg: 'var(--surface2)', b: 'var(--border)' },
          { w: '48%', score: '71%', sc: 'var(--accent)', sb: 'var(--accent-line)', sbg: 'var(--accent-soft)', bg: 'var(--surface2)', b: 'var(--border)', op: .7 },
        ].map(({ w, score, sc, sb, sbg, bg, b, op }, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.4rem', padding: '.4rem', background: bg, border: `1px solid ${b}`, borderRadius: '4px', opacity: op || 1 }}>
            <div style={{ flex: 1 }}>
              <div style={{ height: '5px', background: 'var(--border)', borderRadius: '1px', width: w, marginBottom: '.2rem' }} />
              <div style={{ height: '4px', background: 'var(--border)', borderRadius: '1px', width: '40%', opacity: .4 }} />
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', padding: '.15rem .4rem', background: sbg, color: sc, border: `1px solid ${sb}`, borderRadius: '2px' }}>{score}</span>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>Personal Project</div>
    </div>
  );
}

function AlefArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--text2)' }}>ESP32 · TWAI</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: '#4ade80' }}>ZERO LOCKED</span>
      </div>
      <div style={{ display: 'flex', gap: '.4rem', flex: 1 }}>
        <div style={{ flex: 1, background: 'var(--accent-soft)', border: '1px solid var(--accent-mid)', borderRadius: '4px', padding: '.5rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
          {['Hall A', 'Hall B', 'Homing'].map((l) => (
            <div key={l} style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--accent)' }}>{l} ●</div>
          ))}
        </div>
        <div style={{ flex: 1, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.5rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)' }}>Loop</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.7rem', color: 'var(--accent)' }}>100 Hz</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)', marginTop: '.4rem' }}>vel + incr pos</div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>Alef</div>
    </div>
  );
}

function ChurnArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--accent)' }}>POST /predict</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)' }}>FastAPI</span>
      </div>
      {[
        { l: 'LogReg recall', v: '79%' },
        { l: '250k F1', v: '0.72' },
        { l: 'ROC-AUC', v: '0.90' },
      ].map(({ l, v }) => (
        <div key={l} style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px', padding: '.35rem .5rem' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--text3)' }}>{l}</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--accent)' }}>{v}</span>
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>ML Pipeline</div>
    </div>
  );
}

function AgentDexArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--accent)' }}>Wiki crawl → RedisVL → prefetch</div>
      <div style={{ display: 'flex', gap: '.3rem', flex: 1 }}>
        {['Crawl', 'KNN cache', 'LLM filter'].map((s, i) => (
          <div key={s} style={{ flex: 1, background: i === 1 ? 'var(--accent-soft)' : 'var(--surface2)', border: `1px solid ${i === 1 ? 'var(--accent-line)' : 'var(--border)'}`, borderRadius: '3px', padding: '.4rem', fontFamily: 'var(--mono)', fontSize: '.5rem', color: i === 1 ? 'var(--accent)' : 'var(--text2)' }}>{s}</div>
        ))}
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: '#4ade80' }}>warm hit · skip recrawl</div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>Multi-agent</div>
    </div>
  );
}

function AirQualityArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--text2)' }}>Arduino UNO</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: '#4ade80' }}>99.5% uptime</span>
      </div>
      <div style={{ flex: 1, display: 'flex', gap: '.3rem' }}>
        {['CO', 'VOC', 'FAN'].map((l, i) => (
          <div key={l} style={{ flex: 1, background: i === 2 ? 'rgba(251,191,36,.08)' : 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '.55rem', color: i === 2 ? '#f59e0b' : 'var(--text2)' }}>{l}</div>
        ))}
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)' }}>10 Hz read · alert &lt; 200ms</div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>Embedded</div>
    </div>
  );
}

function CosmeticArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--accent)' }}>POST /v1/analyze</div>
      <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-mid)', borderRadius: '3px', padding: '.45rem', fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text2)', lineHeight: 1.5 }}>risk: medium · confidence 0.72 · cache miss</div>
      <div style={{ display: 'flex', gap: '.3rem', flex: 1 }}>
        {['schema', 'LLM', 'cache'].map((s) => (
          <div key={s} style={{ flex: 1, background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'var(--text3)' }}>{s}</div>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>FastAPI</div>
    </div>
  );
}

const projects = [
  {
    title: 'ESP32 Wheel Calibration',
    period: 'Apr – May 2026 · Alef',
    status: 'done',
    desc: 'Dual Hall-sensor homing on ESP32 to restore wheel zero after power loss. CAN (TWAI) motor control at 100 Hz for velocity and incremental positioning, hysteresis against EMI, and a diagnostic web UI that cut field setup time.',
    tags: ['ESP32', 'CAN/TWAI', 'C++', 'Hall sensors'],
    role: 'Firmware Software Engineer Intern',
    art: <AlefArt />,
  },
  {
    title: 'URC Teleoperation — Mission Control',
    period: 'Jan – Aug 2026 · SJSURoboticsTeam',
    status: 'done',
    desc: 'React + Python arm teleoperation over CAN: ACK/recovery, slider and gamepad controls with joint limits, disconnect handling, commanded-vs-feedback TX, HEALTH state machine, and a UART drive backup path. Merged into urc-teleoperation-2026.',
    tags: ['React', 'Python', 'CAN', 'UART', 'Socket.IO'],
    role: 'Mission Control Software Engineer',
    href: 'https://github.com/SJSURoboticsTeam/urc-teleoperation-2026',
    art: <RoboticsArt />,
  },
  {
    title: 'Air Quality Monitoring System',
    period: 'Apr – June 2025',
    status: 'done',
    desc: 'Arduino UNO + gas sensors at 10 Hz. Threshold logic trips fan and LED alerts in under 200ms. Hardware/software soak tests hit 99.5% uptime over 72 hours.',
    tags: ['Arduino', 'C++', 'Sensors'],
    role: 'Embedded Developer',
    art: <AirQualityArt />,
  },
  {
    title: 'Edge AI Headcount',
    period: 'Feb – May 2026 · Nuvoton × SJSU AI/ML Club',
    status: 'done',
    desc: 'YOLOv8 people counting on Ethos-U55 edge hardware. Reached mAP@0.5 0.979 and mAP@0.5:0.95 0.651 after 20–200+ epoch experiments, then held 20–22 FPS on-device.',
    tags: ['YOLOv8', 'Edge AI', 'Ethos-U55', 'Python'],
    role: 'Machine Learning Engineer',
    art: <NuvotonArt />,
  },
  {
    title: 'SCEvents + Clark Calendar',
    period: 'Mar – May 2026 · SCE-Development',
    status: 'done',
    desc: 'High-concurrency event platform for SJSU SCE: Kafka registration/waitlist pipelines, Redis locks under 10k+ write spikes, Mongo persistence, and a React calendar on sce.sjsu.edu with JWT auth, role visibility, scheduled publish, and closed-event blocking. 20+ PRs across SCEvents and Clark.',
    tags: ['Go', 'Kafka', 'Redis', 'MongoDB', 'React', 'k6'],
    role: 'Software Engineer Intern',
    href: 'https://github.com/SCE-Development/SCEvents',
    art: <SCEventsArt />,
  },
  {
    title: 'Customer Churn Prediction',
    period: '2026 · Team project',
    status: 'done',
    desc: 'Telecom churn models on usage, tenure, and service features. Compared logistic regression, random forest, and gradient boosting; shipped the 79%-recall logistic pipeline through FastAPI with a saved scikit-learn preprocess/encode/scale/infer pipeline. Scaled experiment on 250k rows reached F1 0.72 and ROC-AUC 0.90.',
    tags: ['Python', 'scikit-learn', 'FastAPI'],
    role: 'ML Engineer',
    href: 'https://github.com/trista-chen-29/Customer-Churn-Prediction',
    art: <ChurnArt />,
  },
  {
    title: 'AgentDex',
    period: '2026 Berkeley AI Hackathon',
    status: 'done',
    desc: 'Multi-agent research pipeline: crawl Wikipedia with Playwright, structure results, store in Redis, then serve predicted follow-ups with semantic KNN (RedisVL) plus LLM-filtered prefetch so warm queries skip a recrawl.',
    tags: ['Python', 'RedisVL', 'uAgents', 'Playwright'],
    role: 'Backend / Agents',
    art: <AgentDexArt />,
  },
  {
    title: 'AI Meeting Agent',
    period: '2026 NVIDIA Hackathon · Agent For Impact',
    status: 'done',
    desc: 'Paste a messy transcript, get summary, decisions, action items with owners/deadlines, blockers, and a copy-ready follow-up. FastAPI + NVIDIA Nemotron with schema validation; React/Vite UI.',
    tags: ['Python', 'FastAPI', 'Nemotron', 'React'],
    role: 'Backend Engineer',
    href: 'https://github.com/trista-chen-29/meeting-agent',
    art: <MeetingAgentArt />,
  },
  {
    title: 'Cosmetic Safety Intelligence API',
    period: '2026',
    status: 'done',
    desc: 'FastAPI service that turns product metadata and storage context into schema-validated expiration risk, recommended action, confidence, and cache/latency metadata via an LLM adapter.',
    tags: ['Python', 'FastAPI', 'Pydantic', 'LLM'],
    role: 'Backend Engineer',
    href: 'https://github.com/trista-chen-29/cosmetic-safety-intelligence-api',
    art: <CosmeticArt />,
  },
  {
    title: 'SpartanClubConnect',
    period: 'Spring 2026 · CS157A · ObviousYordle/CS157A-S1-Team-1',
    status: 'done',
    desc: 'Club/event platform for SJSU: landing and dashboard, officer request workflow with admin review, moderation, RSVP, and event admin. PRs on schema, auth, and officer gating.',
    tags: ['Java', 'JDBC', 'MySQL', 'JSP'],
    role: 'Full-Stack Contributor',
    href: 'https://github.com/ObviousYordle/CS157A-S1-Team-1',
    art: <SpartanArt />,
  },
  {
    title: 'SCE Financial Advising App',
    period: 'Feb 2026 · SJSU SCE',
    status: 'done',
    desc: 'Stock monitoring dashboard with Finnhub polling, Express REST backend, and a React UI with a Vite proxy for CORS-free local development.',
    tags: ['React', 'Node.js', 'Express', 'Finnhub'],
    role: 'Full-Stack Developer',
    href: 'https://github.com/trista-chen-29/sce-stock-exchange',
    art: <StockArt />,
  },
  {
    title: 'Prof-Support',
    period: 'Fall 2025 · CS151 Team 24',
    status: 'done',
    desc: 'JavaFX faculty tool for student profiles, comments, languages, and reports. Built profile viewing/editing with SQLite persistence, comments UI, and whitelist/blacklist reports with CSV export.',
    tags: ['Java', 'JavaFX', 'SQLite', 'Maven'],
    role: 'Full-Stack Contributor',
    href: 'https://github.com/trista-chen-29/Prof-Support',
    art: <ProfSupportArt />,
  },
  {
    title: 'Orig',
    period: '2026 SJ Hacks',
    status: 'done',
    desc: 'Team site for SJ Hacks 2026 — mobile menu, footer reflow, navbar polish, and PDF-related updates so it actually works on a phone.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    role: 'Frontend Contributor',
    href: 'https://github.com/codebyemily/Orig',
    art: <JobTrackerArt />,
  },
];

export default function ProjectsPage() {
  return (
    <div className="page">
      <p className="page-kicker">Selected work</p>
      <h1 className="page-title">Projects</h1>
      <p className="page-sub">
        Hardware, software, and hackathon weekends — built with teammates who also refused to leave a bug alone.
      </p>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={p.title} className={`reveal delay-${Math.min((i % 4) + 1, 5)}`}>
            <ProjectCard
              title={p.title}
              period={p.period}
              status={p.status}
              desc={p.desc}
              tags={p.tags}
              role={p.role}
              href={p.href}
            >
              {p.art}
            </ProjectCard>
          </div>
        ))}
      </div>
    </div>
  );
}