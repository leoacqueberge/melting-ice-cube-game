import IceCube from '../components/IceCube';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-50">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Melting Ice Cube Game</h1>
      <div className="flex flex-col items-center">
        <IceCube />
      </div>
    </main>
  );
}