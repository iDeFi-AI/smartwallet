import Hr from './Hr';

export default function H4({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h4 className="text-xl font-normal text-black">{children}</h4>
      <Hr />
    </>
  );
}
