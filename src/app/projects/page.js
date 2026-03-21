import { SectionLabel } from '@/components/Ui';
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
        {[{ l: 'Accuracy', v: '96.2%', c: '#4ade80' }, { l: 'Inference', v: '17 FPS', c: '#4ade80' }, { l: 'Mode', v: 'ON-DEVICE', c: 'var(--accent)' }].map(({ l, v, c }) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--text2)' }}>
            <span>{l}</span><span style={{ color: c }}>{v}</span>
          </div>
        ))}
        <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden', marginTop: '.1rem' }}>
          <div style={{ width: '96%', height: '100%', background: 'var(--accent)', borderRadius: '2px', opacity: .7 }} />
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

function UARTArt() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '.65rem', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '.35rem .6rem', display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.15rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--text2)' }}>uart_drive_serial.py</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: '.5rem', color: '#f59e0b' }}>● pending hw</span>
      </div>
      <div style={{ display: 'flex', gap: '.4rem', flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
          {["[msg_id]", "[length]", "[payload]"].map((label) => (
            <div key={label} style={{ padding: '.3rem .5rem', background: 'var(--accent-soft)', border: '1px solid var(--accent-mid)', borderRadius: '3px', fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--accent)' }}>{label}</div>
          ))}
          <div style={{ padding: '.3rem .5rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px', fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--text3)' }}>UART framing</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
          <div style={{ padding: '.35rem .5rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--text3)', marginBottom: '.2rem' }}>Teams</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--text2)' }}>Mission Control</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--accent)' }}>↔ Firmware</div>
          </div>
          <div style={{ padding: '.35rem .5rem', background: 'rgba(251,191,36,.06)', border: '1px solid rgba(251,191,36,.2)', borderRadius: '3px' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: '#f59e0b', marginBottom: '.2rem' }}>Pending</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--text3)' }}>HW validation</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--text3)' }}>Framing confirm</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '.75rem', right: '.75rem', fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.22rem .6rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--text2)' }}>SJSU Robotics</div>
    </div>
  );
}

// Newest + in-progress first, then shipped oldest last
const projects = [
  {
    title: 'Edge AI People Counting',
    period: 'Mar 2026 – Present · Nuvoton × SJSU AI/ML Club',
    status: 'wip',
    desc: 'Deploying a CNN on the Nuvoton M55M1 EVB with Ethos-U55 NPU to count elevator passengers in real time — INT8 quantized, fully on-device, targeting >95% accuracy at ≥15 FPS. Monthly mentorship from Nuvoton engineers.',
    tags: ['TensorFlow Lite', 'CNN', 'INT8', 'Nuvoton M55M1', 'Ethos-U55', 'Vela'],
    role: 'ML Engineer',
    art: <NuvotonArt />,
  },
  {
    title: 'UART Drive Communication — SJSU Robotics',
    period: 'Mar 2026 – Present · SJSU Robotics · URC 2027',
    status: 'wip',
    desc: 'Building a UART-based drive communication path as a backup alongside existing CAN infrastructure. Involves cross-team coordination with the firmware team to confirm framing specs, checksums, and hardware validation. Currently pending physical serial connection testing.',
    tags: ['Python', 'UART', 'CAN', 'Serial', 'Embedded'],
    role: 'Mission Control Team Member',
    art: <UARTArt />,
  },
  {
    title: 'SCEvents — Event Registration Platform',
    period: 'Mar 2026 – Present · SJSU SCE Club',
    status: 'wip',
    desc: 'Internal event platform replacing Luma for SCE club. Contributed the GET /events/:id endpoint in Go (Gin), wiring individual event retrieval from MongoDB into the frontend. Built on Kafka + Redis + Docker for production-scale concurrency.',
    tags: ['Go', 'Gin', 'MongoDB', 'Redis', 'Kafka', 'Docker'],
    role: 'Dev Team Member',
    art: <SCEventsArt />,
  },
  {
    title: 'SpartanClubConnect',
    period: 'Feb 2026 – Present · Database Systems Course',
    status: 'wip',
    desc: 'Instagram-style event platform for SJSU clubs — students follow clubs, browse and RSVP to events, club officers post announcements, admins moderate. Full-stack with role-based auth, RSVP logic, and waitlist handling.',
    tags: ['Java', 'JDBC', 'JSP', 'MySQL', 'Apache Tomcat'],
    role: 'Full-Stack Developer',
    art: <SpartanArt />,
  },
  {
    title: 'AI Meeting Agent',
    period: 'Mar 16, 2026 · Agent for Impact Hackathon',
    status: 'done',
    desc: 'Paste a messy meeting transcript, get back a structured breakdown — summary, decisions, action items with owners & deadlines, blockers, and a copy-ready follow-up message. Detects missing owners and vague tasks automatically.',
    tags: ['Python', 'FastAPI', 'NVIDIA Nemotron', 'React', 'Vite', 'Pydantic'],
    role: 'Backend Engineer & Testing Lead',
    art: <MeetingAgentArt />,
  },
  {
    title: 'Mission Control Health Indicator',
    period: 'Jan – Mar 2026 · SJSU Robotics',
    status: 'done',
    desc: 'Designed and shipped a real-time communication health feature for the rover teleoperation dashboard. A timestamp-based state machine (GOOD / WARN / LOST / NO DATA) gives operators a single-glance system status without parsing raw metrics. Integrated into existing React architecture using hooks — no backend changes required.',
    tags: ['React', 'Socket.IO', 'MUI', 'useEffect', 'useMemo'],
    role: 'Mission Control Team Member',
    art: <RoboticsArt />,
  },
  {
    title: 'SCE Financial Advising App',
    period: 'Feb 2026 · SJSU SCE Club',
    status: 'done',
    desc: 'Full-stack stock monitoring system integrating Finnhub API with scheduled per-symbol polling, Express REST backend, and a dynamic React dashboard. Configured Vite proxy for CORS-free integration.',
    tags: ['React', 'Node.js', 'Express', 'Finnhub API', 'Vite'],
    role: 'Full-Stack Developer',
    art: <StockArt />,
  },
  {
    title: 'Prof-Support',
    period: 'Sep – Dec 2025 · CS151 Team Project',
    status: 'done',
    desc: 'Desktop app for faculty to manage student academic profiles, programming languages, comments, and reports. My contributions: built the View Student Profiles page (v0.5), implemented Edit Student Profiles with SQLite persistence (v0.7), designed the Add Comments UI (v0.8), and built the full Reports interface with whitelist/blacklist filtering and CSV export (v0.9).',
    tags: ['Java', 'JavaFX', 'FXML', 'SQLite', 'Maven', 'DAO/Service'],
    role: 'Full-Stack Contributor (UI + Backend Integration)',
    art: <ProfSupportArt />,
  },
  {
    title: 'Smart Job Tracker System',
    period: 'Dec 2024 – Feb 2025',
    status: 'done',
    desc: 'Backend pipeline scraping & normalizing 500+ job postings via BeautifulSoup, stored in a Django ORM relational schema with NLP-based keyword scoring to rank the most relevant roles first.',
    tags: ['Python', 'Django', 'MySQL', 'BeautifulSoup', 'NLP'],
    role: 'Backend Developer',
    art: <JobTrackerArt />,
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2.5rem 5rem' }}>
      <div className="reveal">
        <SectionLabel>Selected Work</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400, marginBottom: '2.5rem',
        }}>
          Things I&apos;ve{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>built</em>
        </h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.25rem',
      }}>
        {projects.map((p, i) => (
          <div key={p.title} className={`reveal delay-${Math.min((i % 4) + 1, 5)}`}>
            <ProjectCard
              title={p.title}
              period={p.period}
              status={p.status}
              desc={p.desc}
              tags={p.tags}
              role={p.role}
            >
              {p.art}
            </ProjectCard>
          </div>
        ))}
      </div>
    </div>
  );
}