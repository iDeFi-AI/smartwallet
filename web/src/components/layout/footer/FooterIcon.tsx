import Image from 'next/image';

export default function FooterIcon() {
  return (
    <div className="footer-icon-container">
      <Image
        src="/icons/48x48dark.png" // Path to your logo image
        alt="Footer Logo"
        width={32} // Set width as needed
        height={32} // Set height as needed
      />
    </div>
  );
}
