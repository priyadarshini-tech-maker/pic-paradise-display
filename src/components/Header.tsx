const Header = () => {
  return (
    <header className="text-center mb-12 animate-slide-up">
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-4">
        Gallery
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        A curated collection of stunning visuals. Click any image to explore in detail.
      </p>
    </header>
  );
};

export default Header;
