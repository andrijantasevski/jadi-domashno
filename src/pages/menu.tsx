import { NextPage } from "next";
import "@splidejs/react-splide/css";
import "dayjs/locale/mk";
import SectionTitle from "@/components/ui/SectionTitle";
import SliderDays from "@/components/common/SliderDays";
import SliderFoodCategories from "@/components/common/SliderFoodCategories";

import { Combobox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState, Fragment, useEffect } from "react";
import {
  CheckMarkIcon,
  ChevronUpDownIcon,
  LocationIcon,
} from "@components/icons";

interface City {
  id: number;
  label: string;
  value: string;
}

const cities = [
  { id: 1, label: "Скопје", value: "Skopje" },
  { id: 2, label: "Битола", value: "Bitola" },
  { id: 3, label: "Куманово", value: "Kumanovo" },
  { id: 4, label: "Струмица", value: "Strumica" },
  { id: 5, label: "Кочани", value: "Kochani" },
  { id: 6, label: "Кавадарци", value: "Kavadarci" },
];

const FilterByLocationCombobox = () => {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState({} as City);
  const [cityQuery, setCityQuery] = useState("");

  const filteredCities =
    cityQuery === ""
      ? cities
      : cities.filter(
          (city) =>
            city.value.toLowerCase().includes(cityQuery.toLowerCase()) ||
            city.label.toLowerCase().includes(cityQuery.toLowerCase())
        );

  useEffect(() => {
    if (router.query.city) {
      const city = cities.find((city) => city.value === router.query.city);
      setSelectedCity(city as City);
    } else {
      setSelectedCity({} as City);
    }
  }, [router.query]);

  useEffect(() => {
    if (Object.keys(selectedCity).length !== 0) {
      router.push(
        {
          pathname: "/menu",
          query: { ...router.query, city: selectedCity.value },
        },
        undefined,
        { scroll: false }
      );
    }
  }, [selectedCity]);

  return (
    <div className="flex w-full flex-col items-center gap-4 lg:w-auto lg:flex-row">
      <Combobox
        value={selectedCity}
        onChange={setSelectedCity}
        as="div"
        className="relative w-full"
        name="city"
      >
        <div className="flex justify-between rounded-lg bg-gray-50 py-2 px-3 shadow-md">
          <div className="flex w-full items-center gap-1">
            <LocationIcon className="h-5 w-5 text-primary-600" />
            <Combobox.Input
              displayValue={(city: City) => (city ? city.label : "")}
              placeholder="Внесете град"
              className="w-full bg-transparent font-normal focus:outline-none lg:w-auto"
              onChange={(e) => setCityQuery(e.target.value)}
            />
          </div>
          <Combobox.Button
            title="Погледете ги градовите"
            aria-label="Погледнете ги градовите"
          >
            <span className="sr-only">Погледете ги градовите</span>
            <ChevronUpDownIcon className="h-5 w-5 text-primary-600" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setCityQuery("")}
        >
          <Combobox.Options
            as="div"
            className="absolute mt-2 max-h-56 w-full overflow-y-auto rounded-lg bg-gray-50 py-2 shadow-md"
          >
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <Combobox.Option
                  className={({ active }) =>
                    `flex cursor-pointer list-none items-center gap-2 px-4 py-2 hover:bg-primary-600 hover:text-primary-50 ${
                      active
                        ? "bg-primary-600 text-primary-50"
                        : "text-gray-900"
                    }`
                  }
                  key={city.id}
                  value={city}
                >
                  {({ selected, active }) => (
                    <>
                      <CheckMarkIcon
                        className={`${
                          selected ? "text-primary-600" : "text-transparent"
                        } ${active ? "text-primary-50" : ""} h-4 w-4`}
                      />

                      {city.label}
                    </>
                  )}
                </Combobox.Option>
              ))
            ) : (
              <p className="px-4 py-2">Нема резултати.</p>
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

const FilteringSidebar = () => {
  return (
    <aside className="w-80 shrink-0 px-4">
      <div className="rounded-lg bg-gray-50 p-4 shadow-md">
        <FilterByLocationCombobox />
      </div>
    </aside>
  );
};

const Menu: NextPage = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <SectionTitle>Мени</SectionTitle>
      </div>

      <section className="mx-auto w-11/12 max-w-2xl pb-10">
        <SliderDays />
      </section>

      <section className="mx-auto w-11/12 pb-10 lg:max-w-4xl xl:max-w-5xl">
        <SliderFoodCategories />
      </section>

      <section className="relative flex">
        <FilteringSidebar />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
        veritatis! Nihil possimus numquam optio cumque distinctio ipsa. Quia,
        aspernatur? Ut corporis, quod nobis vero asperiores perspiciatis vitae
        molestiae quo sunt laudantium distinctio quidem. Soluta dolorum itaque
        veniam non vel blanditiis fuga similique ut exercitationem voluptatem
        assumenda, magnam sint odio repudiandae quasi explicabo libero, in
        molestias minus at minima praesentium maxime. Facilis tempora molestias
        omnis esse illo in nemo ducimus at vel, sapiente reprehenderit laborum
        similique minus repudiandae illum neque, numquam labore culpa voluptates
        aperiam nobis suscipit aliquam corrupti. Corporis sit accusamus rem
        laudantium! Placeat facilis obcaecati totam quod magni officiis debitis
        eum sint nobis consectetur fuga sed eos nulla recusandae temporibus
        veritatis at inventore excepturi esse numquam error mollitia amet,
        dolores aut. Labore, tenetur pariatur earum nostrum voluptatibus sed
        ipsum officiis accusamus dicta odio laboriosam ducimus corrupti aperiam,
        ex voluptatum aspernatur dolorum laudantium quidem explicabo eaque
        reprehenderit. Accusamus non corporis iure necessitatibus quas
        reiciendis, officia amet. Ex error magni deserunt itaque modi corporis
        temporibus dolores. Possimus molestias corrupti dolorum fugiat neque
        mollitia assumenda harum debitis sit, natus architecto quis quae
        voluptates aperiam dicta, veniam sed quibusdam! Eligendi amet
        consequuntur voluptatibus adipisci. Esse nemo cumque provident neque?
        Mollitia soluta, vel, officia quas iste harum itaque quia tempore
        aperiam, nisi voluptates explicabo voluptate qui a autem. Tempore,
        repellendus asperiores tenetur rerum eum eligendi quae earum! Quibusdam
        a architecto dignissimos qui odit! Incidunt quas animi placeat modi ipsa
        soluta autem accusamus molestiae. Placeat praesentium exercitationem
        nulla ex, facere quos dicta doloribus harum. Iure, eveniet. Ea aut
        maiores asperiores corporis harum reiciendis vel exercitationem
        excepturi at facilis rem nesciunt perferendis laudantium optio hic dolor
        modi, molestiae, consequuntur doloremque minima alias. Debitis possimus
        explicabo dolore fuga rem magnam suscipit pariatur dignissimos sapiente.
        Molestiae, provident quis ullam, inventore dignissimos deleniti
        doloribus, maxime beatae corrupti tenetur earum laborum! Iure error
        aliquam dignissimos recusandae libero natus modi sit quo cum ullam
        eaque, dolores laudantium molestias ratione ab beatae! Libero pariatur
        ipsa quos rem at a necessitatibus itaque praesentium! Unde aliquam
        mollitia corrupti perspiciatis accusantium velit iure alias iusto
        eligendi officia. Vel ut cum quidem fugiat voluptate ea est quas
        delectus corrupti. Voluptatibus culpa, ipsam explicabo voluptate magnam
        velit quibusdam assumenda adipisci officia aut quia quo aliquid
        temporibus exercitationem obcaecati sunt laborum dolorum. Facere
        laudantium commodi esse adipisci suscipit minima ex aspernatur dolorum
        placeat excepturi repellendus dolorem quam optio ipsum officia, odit
        dolores perferendis, nulla asperiores obcaecati? Odio ullam veniam saepe
        laborum. Neque facilis quaerat praesentium quis aliquam quisquam iste
        debitis in aliquid delectus eius soluta tempora, error omnis culpa
        voluptate maiores tempore pariatur amet earum. Consectetur rem ipsa,
        accusantium id eligendi tenetur sunt modi ipsam veritatis sint harum
        ullam. Illum dolores voluptates distinctio quae eum et similique dolore
        suscipit quod, quisquam pariatur incidunt atque magni saepe veniam
        voluptas deleniti, vero ratione exercitationem numquam quos excepturi
        earum cumque ea? Suscipit mollitia accusantium repellat, ducimus eius
        exercitationem consequatur accusamus velit ipsa. Aperiam molestias eaque
        soluta ad voluptatem sunt perspiciatis fuga voluptatibus esse
        blanditiis, adipisci commodi expedita aspernatur asperiores ex omnis
        libero eligendi repellat doloremque vero nisi magnam tempore. Modi,
        fugiat dignissimos tempore quis, a dolorum error iure quasi, vitae
        provident doloremque? Libero quasi sed enim voluptate, illo saepe
        repellendus commodi quibusdam voluptas laboriosam? Unde vitae architecto
        perspiciatis laboriosam? Natus, dicta illo perferendis numquam alias
        autem id corporis laboriosam magnam deleniti quaerat molestias sint quos
        animi! Ipsum error aut consequatur maxime voluptatibus sunt delectus
        odit dolorum, neque, autem molestiae sed sequi ipsam? Animi magni
        quaerat voluptatem at, nemo adipisci. Quae deleniti voluptas ea eaque,
        laborum vitae deserunt ab quas asperiores suscipit cumque blanditiis
        modi, culpa nihil mollitia vel delectus odio aperiam nobis distinctio
        doloribus tempore consectetur assumenda? Ad natus recusandae minus modi,
        officiis ratione iste est tempore temporibus! Libero, atque expedita!
        Consequatur consectetur dolores quod possimus voluptas! Dolore dolores,
        est magnam quas, obcaecati suscipit ipsam quis quasi beatae rerum neque
        reiciendis earum aliquam veniam exercitationem debitis minima eius nam
        consequatur ducimus! Illo assumenda eveniet, commodi numquam, impedit
        facilis nobis voluptatem animi sit esse officiis tenetur id dignissimos
        cum quam accusamus quos quas soluta doloribus itaque inventore aliquam.
        Quam, ab inventore assumenda ex vero facere quibusdam quaerat odio esse
        ratione? Similique fugit voluptatibus iure. Modi quisquam nostrum itaque
        molestias sapiente nemo sunt neque non fugiat aspernatur, ab esse ea
        adipisci officiis excepturi ratione ut commodi! Itaque sed dolorum
        facere explicabo vero, vitae aperiam minima perferendis repellendus in
        natus alias provident dolore sunt. Ad deserunt eveniet, nisi unde id non
        quo dolor asperiores magnam iste ipsam ea reiciendis nam suscipit
        delectus, impedit dicta rem aliquid accusamus soluta molestiae ipsum.
        Voluptatum doloremque nobis, aliquam rerum reiciendis earum quaerat! Sed
        quo, obcaecati numquam eos amet non. Quae, doloribus? Tenetur incidunt
        rerum harum, ratione dignissimos tempore aperiam commodi rem aliquid a
        eos cum cumque explicabo est. Quo, veniam saepe odio modi aut nulla
        similique nostrum repellendus itaque amet quam tempore neque accusamus
        pariatur doloremque nobis, repellat dolor necessitatibus dolorum eum
        blanditiis cum harum, quos rerum! Quae, aperiam amet pariatur
        consequuntur similique consectetur! Quidem, minus! Reprehenderit quia,
        pariatur hic nesciunt est totam maxime quam mollitia, excepturi, sint
        ipsa eligendi officia modi quisquam esse illo inventore. Laborum ullam
        deserunt temporibus quo aliquid reiciendis harum distinctio id
        architecto natus quis impedit ipsam assumenda repellat omnis quod qui
        provident, dolore laboriosam iste. Placeat laboriosam laudantium amet
        impedit iste cupiditate quasi adipisci excepturi ullam, doloremque vitae
        sapiente consequuntur tempore officia nulla vero explicabo. Facilis
        voluptatem officia maiores quaerat, quos error tenetur, possimus quidem
        nesciunt animi sint cum, mollitia corporis nemo ullam quis odio dolor
        ipsam veniam earum? Incidunt adipisci magnam doloribus mollitia rem
        ipsam consequatur maxime sapiente rerum quae commodi nihil, ex
        molestiae, in earum, voluptatibus eaque. Ex ipsa facilis odio incidunt
        fugit? Repellat deleniti voluptatibus quisquam itaque reiciendis
        assumenda qui perspiciatis temporibus accusantium ipsa aspernatur
        laudantium aut optio, quia in non ut dignissimos tempore autem eveniet
        eos. Provident quaerat saepe architecto optio commodi quae dolores ex
        nemo sit sint? Quae assumenda distinctio autem quaerat cupiditate
        impedit maxime laborum id ratione eos fuga accusamus velit, nostrum
        dolores nobis alias molestiae, nesciunt voluptatum culpa aut repudiandae
        ipsum! Quis, ipsum praesentium eaque accusantium quibusdam voluptatum
        labore hic repellendus voluptatibus illum soluta saepe esse cum, beatae
        magni fuga cumque nisi vero id sint in ut deleniti minima iure?
        Consequatur vero voluptatibus accusantium magnam suscipit eum rerum quas
        veritatis nemo. Aliquid quisquam et ipsam esse nulla ab quidem,
        obcaecati iure suscipit velit ad fuga, ullam voluptates commodi debitis
        ea assumenda rerum blanditiis laborum eveniet! Suscipit quisquam quos
        hic voluptate? Totam quasi tenetur saepe architecto reprehenderit
        voluptas nulla sunt sed expedita corporis! Ea veniam error tempore id,
        tempora nihil excepturi quaerat assumenda repellat eum ad beatae magni,
        accusamus laudantium eaque ut. Impedit excepturi quo adipisci labore
        rem, aliquam laborum natus, aliquid eveniet ullam ducimus optio sapiente
        in. Aspernatur, eos est? Nostrum officiis a blanditiis animi! Quibusdam
        neque distinctio aut facere nemo ipsa sint eos laborum aspernatur
        mollitia molestias impedit sequi a quasi quis optio, nulla voluptate
        ratione. Quam consectetur minus modi fuga enim suscipit impedit tenetur
        soluta voluptatem sunt iste, esse dicta a ad illo harum voluptatum
        ducimus excepturi nobis temporibus? Autem corrupti pariatur porro ullam
        ea in laudantium quis magnam, dolores, earum aut accusamus commodi
        deserunt? Alias tempora, quidem in itaque esse id magnam commodi ullam
        possimus perferendis porro ipsum reprehenderit unde eaque amet
        consectetur! Accusantium consequatur placeat hic facere quidem culpa
        odio inventore, necessitatibus beatae! Magni reprehenderit modi rerum,
        dolore maxime facere unde corporis praesentium ea dolor incidunt quos
        qui totam explicabo hic provident soluta nulla necessitatibus quaerat
        dolores laborum sapiente, molestiae non ex! Error quos libero corrupti
        excepturi quasi rerum. Voluptatibus, molestias officia cupiditate eum
        minus hic voluptatem? Dicta nisi nihil est quidem adipisci placeat eius
        officiis tempore laboriosam molestias distinctio sint quaerat quae,
        doloremque recusandae nostrum, amet eum vitae ab quisquam libero
        explicabo. Quas harum nam ipsam reprehenderit ipsum error minus, impedit
        quis magnam, et ipsa adipisci magni eius, ratione cumque enim neque
        dicta! Dolor minus nemo repudiandae, aspernatur praesentium, eos vitae
        nihil at repellendus architecto vel non. Inventore ut sapiente dolore
        laudantium, magni, veritatis ipsam deserunt tenetur quo, nemo impedit ea
        reiciendis harum aliquid consequatur fugit eos pariatur vel itaque
        tempore. Ipsa placeat eius deleniti nam eos, laudantium illo architecto
        praesentium quae, repellat ea dicta ratione consequatur, quisquam enim.
        Odio nobis enim, laudantium sed dolorum quos vitae officia, deserunt
        fugiat eius maxime animi quis, magni facilis quisquam et quod neque?
        Illo rem perspiciatis, aut in deserunt labore, libero sit vel
        necessitatibus repudiandae enim atque fugiat, mollitia omnis suscipit
        similique dolorem quaerat nostrum itaque explicabo cupiditate? Nihil
        iste laboriosam nesciunt recusandae ratione. Quas consequuntur sapiente
        sint quo porro, perferendis, maiores, autem eos similique molestiae
        possimus dignissimos reprehenderit minima neque animi consequatur.
        Veritatis dolore quia quaerat odit praesentium, magni reiciendis
        perspiciatis eaque dolorem, nobis molestias aliquid. Ducimus sint nemo
        minus minima nisi cum, quis omnis? Quis ratione, porro beatae odit
        ducimus qui natus autem eaque reprehenderit libero assumenda rerum magni
        molestiae, impedit neque quisquam sit id aliquid maiores accusantium
        dolor ex. Culpa nostrum eius numquam eveniet sequi deleniti doloremque
        voluptas aut, perferendis eaque.
      </section>
    </>
  );
};

export default Menu;
