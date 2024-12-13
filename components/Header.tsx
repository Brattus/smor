export function Header({ title }: { title: string }) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600">Tracking our commitment to system reliability</p>
    </header>
  );
}