export default function Section1() {
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-6xl p-4 font-caveat text-center'>
        Building a <span className='text-yellow'>better</span> web, together
      </h1>

      <p className='text-justify'>
        We want to help you build beautiful, accessible, fast, and secure
        websites that work cross-browser, and for all of your users. This site
        is our home for content to help you on that journey, written by members
        neque fugit dolorem iusto aperiam. Ullam sint magni tenetur!
      </p>

      <a
        href='/join'
        className='block mx-auto border-2 border-yellow py-2 w-40 text-center rounded-full my-4 mb-20'
      >
        Hire Us
      </a>
    </section>
  );
}
