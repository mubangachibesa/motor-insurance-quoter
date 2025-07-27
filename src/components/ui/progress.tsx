export function Progress({ value }: { value: number }) {
  return <div style={{ background: '#eee', height: '8px', width: '100%' }}>
    <div style={{ background: '#0a0', height: '8px', width: `${value}%` }}></div>
  </div>;
}
