import { useAccount } from 'wagmi';
import { useCapabilities, UseCapabilitiesReturnType } from 'wagmi/experimental';

/**
 * Capabilities component displays the Smart Wallet capabilities of the current account.
 */
export function Capabilities() {
  const account = useAccount();
  const { data: capabilities } = useCapabilities({
    account: account.address,
  }) as UseCapabilitiesReturnType;

  return (
    <div className="font-sans text-black">
      <h2 className="font-bold text-black">Capabilities:</h2>
      {capabilities ? (
        <pre className="mt-2 overflow-auto rounded bg-gray-800 p-2.5 font-mono text-black">
          {JSON.stringify(capabilities, null, 2)}
        </pre>
      ) : (
        <p>No capabilities found.</p>
      )}
    </div>
  );
}
