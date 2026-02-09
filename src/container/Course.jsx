import Card from "../components/Card";
import { coursesData } from "../data/coursesData";

const Course = () => {
  return (
    <section id="course" className="mx-auto md:px-25 ">
      <div className=" px-5">
        <h2 className="md:text-4xl text-2xl mb-2 font-[Poppins] font-bold">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-[#333333ad] font-medium text-base font-[DM_Sans] mb-8 ">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <div className="tabs-container overflow-hidden pl-5  ">
        <div className="tabs flex md:gap-9 gap-5 mb-3 flex-row overflow-hidden w-125 md:w-full  ">
          <a href="#" className="text-[#f64920] font-bold w">
            Semua Kelas
          </a>
          <a href="#" className="text-[#333333ad] font-bold">
            Pemasaran
          </a>
          <a href="#" className="text-[#333333ad] font-bold">
            Desain
          </a>
          <a href="#" className="text-[#333333ad] font-bold">
            Pengembangan Diri
          </a>
          <a href="#" className="text-[#333333ad] font-bold">
            Bisnis
          </a>
        </div>

        <div
          id="divider-tabs"
          className="w-14 h-1 bg-[#f64920] rounded-lg"
        ></div>
      </div>

      <div className="card-container flex flex-col md:grid md:grid-cols-3 gap-6 mt-8 px-5">
        {coursesData.map((course) => (
          <Card
            key={course.id}
            profileImg={course.profileImg}
            cardHeroImg={course.cardHeroImg}
          />
        ))}
      </div>
    </section>
  );
};

export default Course;
