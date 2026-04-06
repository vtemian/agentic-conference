const AsciiDivider = () => {
  const line1 = "01001000 01000101 01001100 01001100 01001111 00100000 01000001 01000111 01000101 01001110 01010100 01010011";
  const skyline = `
        ┌──┐                    ┌───┐       ┌──┐
   ┌──┐ │  │  ┌──┐        ┌──┐ │   │  ┌──┐ │  │ ┌──┐
┌──┤  ├─┤  ├──┤  ├──┐  ┌──┤  ├─┤   ├──┤  ├─┤  ├─┤  ├──┐
│  │  │ │  │  │  │  │  │  │  │ │   │  │  │ │  │ │  │  │
┴──┴──┴─┴──┴──┴──┴──┴──┴──┴──┴─┴───┴──┴──┴─┴──┴─┴──┴──┴──`;

  return (
    <div className="py-8 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <pre className="text-[0.45rem] md:text-[0.6rem] text-muted-foreground/30 text-center leading-tight overflow-x-auto whitespace-pre">
          {skyline}
        </pre>
        <p className="text-[0.5rem] text-muted-foreground/20 text-center mt-2 tracking-widest overflow-hidden whitespace-nowrap">
          {line1}
        </p>
      </div>
    </div>
  );
};

export default AsciiDivider;
