import { useState } from "react";
import { dataBase } from "./dataBase";
import money from "./assets/images/money.svg";
const App = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="intro__box">
            <h2 className="intro__title">Oson Ijara</h2>
            <p className="intro__text">
              Здесь вы можете посмотреть в какой категории находится услуга!
            </p>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="container">
          <div className="main__box">
            {dataBase.map((data) => (
              <div className="category__card card" key={data.id}>
                <button
                  className="card__btn"
                  onClick={() =>
                    setActiveId(activeId === data.id ? null : data.id)
                  }
                >
                  <div className="card__imgBox">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="card__img"
                    />
                  </div>
                  <h2 className="category__title">
                    {data.title}
                    {data.subTitle && <p>{data.subTitle} </p>}
                  </h2>
                </button>

                {activeId === data.id && data.info && (
                  <div
                    className="card__service"
                    onClick={() => setActiveId(!activeId)}
                  >
                    <h1 className="service__category">
                      {data.title}
                      {data.subTitle && <p>{data.subTitle} </p>}
                    </h1>
                    <div className="service__box">
                      {data.info.map((service) => (
                        <div key={service.id} className="service__item">
                          <h3 className="service__title">
                            {service.title}
                            <p>{service.subTitle}</p>
                          </h3>
                          <p className="service__price">
                            Цена:{" "}
                            <img
                              src={money}
                              alt=""
                              className="service__price--moneyImg"
                            />{" "}
                            {service.price} сум
                          </p>
                          {service.timeComplete && (
                            <p className="service__timeComplete">
                              Время завершения: ⏱ {service.timeComplete} мин.
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
