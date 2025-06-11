
const ScannerLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-scanner opacity-30" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-purple to-transparent animate-scanner opacity-20" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-pink to-transparent animate-scanner opacity-25" 
           style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default ScannerLines;
