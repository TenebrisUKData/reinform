export default function AdvertPlaceholder({ id }) {
  return (
    <div className="advert-placeholder" id={id}>
      <span>Advert Space {id}</span>
      <style jsx>{`
        .advert-placeholder {
          width: 100%;
          min-height: 90px;
          background: #f2f2f2;
          color: #aaa;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2em 0;
          border: 2px dashed #ccc;
        }
      `}</style>
    </div>
  )
}
