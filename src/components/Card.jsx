import Rating from "../assets/images/Rating.png";

const Card = ({ profileImg, cardHeroImg }) => {
  return (
    <>
      <div className="card bg-white p-5 rounded-xl border border-[#3a35411f]">
        <div className="card-desc flex md:flex-col flex-row md:gap-0 gap-2">
          <img
            src={cardHeroImg}
            alt="Card Image"
            className="md:w-full w-20.5 md:h-48.75 h-20.5 object-cover rounded-lg mb-2"
          />
          <div className="title-profile-container mb-4">
            <div className="title-desc-container md:mb-4">
              <div className="title md:text-lg text-[16px] font-bold mb-2">
                Big 4 Auditor financial analyst
              </div>
              <p className="desc text-[#333333ad] font-semibold md:block hidden">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan ...
              </p>
            </div>
            <div className="profile-card flex items-start gap-3">
              <img
                src={profileImg}
                alt="Instructor"
                className="md:w-10 md:h-10 w-7.5 h-7.5 rounded-md"
              />
              <div className="profile-text">
                <p className="name-person font-bold md:text-lg text-sm">
                  Jenna Ortega
                </p>
                <p className="person-position text-[#333333ad] md:text-sm text-[12px]">
                  Senior Accountant di <strong>Gojek</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-price flex justify-between items-center">
          <div className="rating flex gap-2">
            <img src={Rating} alt="Rating" className="w-22.5 h-4.5" />
            <p>3.5 (86)</p>
          </div>
          <p className="price md:text-2xl text-lg font-bold text-[#3ecf4c]">
            Rp 300K
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
