import React from 'react'

const datasets = [
  { name: 'PAYROLL.DSN', type: 'VSAM', size: '128MB', records: '12,345', created: '2024-07-01' },
  { name: 'CUSTOMER.CNTL', type: 'DB2', size: '64MB', records: '48,120', created: '2023-11-15' },
  { name: 'TRANS.BATCH', type: 'VSAM', size: '256MB', records: '1,200,000', created: '2024-02-10' },
  { name: 'LOGS.CICS', type: 'PS', size: '32MB', records: '80,000', created: '2024-05-21' },
  { name: 'ARCHIVE.Y21', type: 'PS', size: '512MB', records: '3,400,000', created: '2022-12-30' },
]

const skills = [
  { name: 'COBOL', level: 'Advanced', years: 3 },
  { name: 'CICS', level: 'Advanced', years: 3 },
  { name: 'JCL', level: 'Intermediate', years: 2 },
  { name: 'DB2', level: 'Intermediate', years: 2 },
  { name: 'VSAM', level: 'Intermediate', years: 2 },
  { name: 'TSO/ISPF', level: 'Intermediate', years: 2 },
  { name: 'Git', level: 'Intermediate', years: 1 },
]

export default function Skills() {
  return (
    <section id="skills" className='mainframe p-6'>
      <div className='w-11/12 mx-auto'>
        <h2 className='text-3xl font-bold text-accent mb-4'>Skills</h2>
        <div className='mf-list'>
          {skills.map((s, i) => (
            <div key={i} className='mf-list-row flex items-center justify-between py-2 border-b border-green-900'>
              <div className='font-mono'>{s.name}</div>
              <div className='muted'>{s.level}</div>
              <div className='muted'>{s.years}y</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
