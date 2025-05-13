export default function Footer() {
  return (
    <footer>
      <div>
        <a href="#home">Home</a> | <a href="#uk-politics">UK Politics</a> | <a href="#uk-economy">UK Economy</a> | <a href="#articles">Articles</a>
      </div>
      <div>
        If you want to advertise in one of the spaces or buy API access then please <a href="mailto:contact@reinformed.uk">click here</a>.
      </div>
      <div>
        © Reinformed.uk | All code by JDR785
      </div>
      <style jsx>{`
        footer {
          background: #222;
          color: #fff;
          padding: 2em 1em;
          text-align: center;
          font-size: 1em;
        }
        a {
          color: #ffd700;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  )
}
