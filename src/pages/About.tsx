const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* HERO */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest">
            About <span className="text-red-600">Skateflow Nation</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            consequuntur. Quibusdam corporis autem eos unde dolorem perspiciatis
            dolor temporibus! Maxime necessitatibus non fuga culpa similique hic
            laboriosam optio eum eligendi!
          </p>
        </div>

        {/* ORIGIN STORY */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-red-500">
            Change me 1 (origin story?)
          </h2>
          <p className="text-white/80 leading-relaxed text-base md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            voluptatum officiis. Nisi aperiam sequi quis, quidem inventore amet
            cumque neque voluptatum maxime minus assumenda dicta, officiis error
            et eius esse!
          </p>
        </div>

        {/* VISION / MISSION */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-red-600 uppercase mb-2">
              Change me 2 (vision/mission?)
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              rerum iste dolorem. Est ut velit ab optio dolorum repellat,
              voluptatum omnis. Soluta vel atque adipisci magnam obcaecati
              tempora, est ut.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600 uppercase mb-2">
              Change me 3 (some other third section)
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              temporibus, similique deserunt ad tempora, repudiandae porro eaque
              est ex nulla, illo tempore. Iusto reprehenderit esse architecto
              hic quae quia corrupti?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
