"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import MainButton from "../accets/MainButton";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import AnimatedText from "../accets/common/AnimatedText";

function VehicleForm() {
  return (
    <div className="w-full overflow-x-hidden bg-[#202020] relative">
      <div className="w-full absolute z-0 md:top-[98vh] top-[99.5vh]">
        <img
          src="/background/Rectangle 156.svg"
          className="w-full h-full z-0"
        />
      </div>

      {/* front theam page */}
      <div className="w-screen h-screen relative overflow-hidden z-0">
        <video
          preload="none"
          src="/AcnAG/Video/intro.mp4"
          className="w-full h-full object-cover overflow-hidden"
          autoPlay
          muted
          loop
        />
        <div className="flex flex-col items-center text-center md:w-[40%] w-[80%] gap-4 text-white h-[20rem] absolute z-10 bottom-10 left-[50%] translate-x-[-50%] justify-center ">
          <div className="text-lg font-bold">Autocenter Niderbipp AG</div>
          <AnimatedText>
            <div className="text-4xl font-extrabold text-brGold">
              Verkaufe dein Auto
            </div>
          </AnimatedText>
          <div className="flex text-xs font-semibold items-center">
            <div>ENTDECKEN SIE DIE FERRARI BAUREIHE</div>
            <MainButton />
          </div>
        </div>
      </div>
      <div className="z-50 md:p-3">
        <FormComponent />
      </div>
    </div>
  );
}

export default VehicleForm;

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    control,setValue,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data); // Full form data upon submission
    // You can send data to API or perform other actions here
  };
  const vehicleTypes = [
    { value: 'personenwagen', label: 'Personenwagen' ,image: '/resale/icons8-car-50 (1).png'},
    { value: 'nutzfahrzeug', label: 'Nutzfahrzeug', image: '/resale/icons8-car-50 (1).png' },
    { value: 'lastwagen', label: 'Lastwagen', image: '/resale/icons8-car-50 (1).png' },
    { value: 'abholen', label: 'Abholen',image: '/resale/icons8-car-50 (1).png' }
  ];
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col z-10 gap-4 md:p-6 p-1 md:w-3/4 w-[95%] mx-auto rounded-lg font-sans text-white"
    >
      <div className="font-bold pb-2 block text-3xl mb-3 md:mt-4 mt-2 z-50">
        Art des Fahrzeugtyps wählen
      </div>

      {/* Dropdown for smaller screens */}
      <fieldset className="md:hidden block mb-6 bg-footer rounded-xl z-50 p-2">
        <label
          htmlFor="vehicleType"
          className="block mb-2 text-sm font-medium text-white"
        >
          Select Vehicle Type
        </label>
        <select
          {...register("vehicleType")}
          className="block w-full p-2 bg-brGray text-white rounded-md focus:ring-brGold focus:border-brGold"
        >
       {vehicleTypes.map((type) => (
    <option key={type.value} value={type.value}>
      {type.label}
    </option>
  ))}
        </select>
      </fieldset>

      {/* Radio buttons layout for larger screens */}
      <fieldset className="mb-6 hidden md:flex justify-center bg-footer rounded-xl z-50 items-center p-4 md:p-6 md:h-[25vh]">
  {vehicleTypes.map((type) => (
    <div key={type.value} className="flex flex-col items-center md:w-1/4 mb-4 md:mb-0">
      <div className="flex justify-center">
        <img
          src={type.image} // Use the image from the array
          alt={type.label}
          className="inline-block w-10 h-10 mb-2"
        />
      </div>
      <label className="text-center flex gap-2 text-sm md:text-lg text-brGold">
        <input
          type="radio"
          {...register("vehicleType")}
          value={type.value} // Dynamic value
        />
        {type.label} {/* Dynamic label */}
      </label>
    </div>
  ))}
</fieldset>







      {/* Baumonat und Jahr */}
      <div className="bg-[#181818] md:p-6 p-2 z-50 rounded-lg">
        <div className="md:mb-6 mb-2">
          <label className="font-bold md:text-2xl text-lg">
            Baumonat und -jahr (oder Erstzulassung)
          </label>
          <div className="flex gap-2">
            <select
              {...register("monthOfManufacture")}
              className="w-1/2 p-2 mt-1 mb-3 rounded border border-gray-300 text-white bg-brGray h-12"
            >
              <option value="">Monat</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <select
              {...register("yearOfManufacture")}
              className="w-1/2 p-2 mt-1 rounded border border-gray-300 text-white bg-brGray h-12"
            >
              <option value="">Jahr</option>
              {Array.from({ length: 25 }, (_, i) => 2024 - i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Marke and Model */}
        <div className="mb-6">
          <label className="font-bold md:text-2xl text-lg">Marke</label>
          <select
            {...register("brand")}
            className="block w-full p-2 mt-1 rounded border border-gray-300 text-white bg-brGray"
          >
            <option value="">Select Marke</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes">Mercedes</option>
          </select>

          <div className="mb:my-6 my-2 ">
            <label className="font-bold md:text-2xl text-lg">Modell</label>
            <select
              {...register("model")}
              className="block w-full p-2 mt-1 rounded border border-gray-300 text-white bg-brGray"
            >
              <option value="">Select Modell</option>
              <option value="325">325</option>
              <option value="320">320</option>
              <option value="330">330</option>
            </select>
          </div>
        </div>
      </div>

      {/* Add the detailed data, characteristics, extras, and contact details */}
      <CarDetail_1 control={control} />
      <CarDetail_2 control={control} />
      <CarDetail_6 control={control} />
      <CarDetails_7 control={control}  setValue={setValue}/>

      {/* Submit button */}
      <Button
        type="submit"
        className="bg-brGold text-white md:w-[10vw] md:px-4 px-2 md:py-2 py-1 rounded-md"
      >
        Weiter
      </Button>
    </form>
  );
};

const CarDetail_1 = ({ control }) => {
  const aufbau = ["Limousine", "Kombi", "Coupé", "Cabriolet", "Ich weiss nicht"];
  const treibstoff = ["Benzin bleifrei", "Diesel", "Ich weiss nicht"];
  const getriebeart = ["Schaltgetriebe", "Automat sequenziell", "Ich weiss nicht"];

  return (
    <div className="md:p-6 p-2 w-full mx-auto rounded-lg font-sans bg-[#181818]">
      {/* Aufbau Section */}
      <div className="mb-6">
  <label className="font-bold text-xl block mb-2">Aufbau</label>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
    {aufbau.map((item) => (
      <Controller
        key={item}
        name="constructionType"
        control={control}
        render={({ field }) => (
          <button
            type="button"
            onClick={() => field.onChange(item)}
            className={`px-4 py-7 border rounded ${
              field.value === item ? "bg-brGold text-white" : "text-white bg-brGray"
            }`}
          >
            {item}
          </button>
        )}
      />
    ))}
  </div>
</div>


      {/* Treibstoff Section */}
      <div className="mb-6">
  <label className="font-bold text-xl block mb-2">Treibstoff</label>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
    {treibstoff.map((item) => (
      <Controller
        key={item}
        name="fuel"
        control={control}
        render={({ field }) => (
          <button
            type="button"
            onClick={() => field.onChange(item)}
            className={`px-4 py-7 border rounded ${
              field.value === item ? "bg-brGold text-white" : "text-white bg-brGray"
            }`}
          >
            {item}
          </button>
        )}
      />
    ))}
  </div>
</div>


      {/* Getriebeart Section */}
<div className="mb-6">
  <label className="font-bold text-xl block mb-2">Getriebeart</label>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
    {getriebeart.map((item) => (
      <Controller
        key={item}
        name="transmissionType"
        control={control}
        render={({ field }) => (
          <button
            type="button"
            onClick={() => field.onChange(item)}
            className={`px-4 py-7 border rounded ${
              field.value === item ? "bg-brGold text-white" : "text-white bg-brGray"
            }`}
          >
            {item}
          </button>
        )}
      />
    ))}
  </div>
</div>

    </div>
  );
};

const CarDetail_2 = ({ control }) => {
  const commonClasses =
    "block w-full p-2 rounded bg-brGray text-white border border-gray-300";

  return (
    <div className="md:p-6 p-2 w-full mx-auto rounded-lg font-sans bg-[#181818]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2 mb-4">
        
        {/* Fahrzeugfarbe */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Fahrzeugfarbe</label>
          <Controller
            name="vehicleColor"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className={commonClasses}
              >
                <option value="">Auswählen</option>
                <option value="Schwarz">Schwarz</option>
                <option value="Weiß">Weiß</option>
                <option value="Rot">Rot</option>
              </select>
            )}
          />
        </div>

        {/* Preis (CHF) */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Preis (CHF)</label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={commonClasses}
              />
            )}
          />
        </div>

        {/* Version */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Version</label>
          <Controller
            name="version"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={commonClasses}
              />
            )}
          />
        </div>

        {/* Innerfarbe */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Innerfarbe</label>
          <Controller
            name="innerColor"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className={commonClasses}
              >
                <option value="">Auswählen</option>
                <option value="Metallisé">Metallisé</option>
                <option value="Schwarz">Schwarz</option>
                <option value="Weiß">Weiß</option>
                <option value="Beige">Beige</option>
                <option value="Grau">Grau</option>
              </select>
            )}
          />
        </div>

        {/* Zusatztitel */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Zusatztitel</label>
          <Controller
            name="additionalTitle"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                maxLength={125}
                className={commonClasses}
              />
            )}
          />
        </div>

        {/* Typenschein */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Typenschein</label>
          <Controller
            name="typeCertificate"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={commonClasses}
              />
            )}
          />
        </div>

        {/* Fahrgestell-Nr. */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Fahrgestell-Nr.</label>
          <Controller
            name="chassisNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={commonClasses}
              />
            )}
          />
        </div>

        {/* Stammnummer */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Stammnummer</label>
          <Controller
            name="masterNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={commonClasses}
              />
            )}
          />
        </div>

        {/* Wagen-Nr. */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Wagen-Nr.</label>
          <Controller
            name="carNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={commonClasses}
              />
            )}
          />
        </div>

        {/* Fahrzeugzustand */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Fahrzeugzustand</label>
          <Controller
            name="vehicleCondition"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className={commonClasses}
              >
                <option value="">Auswählen</option>
                <option value="Neu">Neu</option>
                <option value="Gebraucht">Gebraucht</option>
              </select>
            )}
          />
        </div>

        {/* Kilometer */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Kilometer</label>
          <Controller
            name="kilometers"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={commonClasses}
              />
            )}
          />
        </div>

        {/* Letzte Prüfung */}
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Letzte Prüfung</label>
          <Controller
            name="finalExam"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={commonClasses}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

const CarDetail_6 = ({ control }) => {
  const characteristics = [
    "AB MFK",
    "Behindertengerecht",
    "Direkt-/Parallelimport",
    "Rennwagen ohne Strassenzulassung",
    "Tuning",
    "Unfallfahrzeug"
  ];

  const extras = [
    "8-fach bereift",
    "Winterreifen",
    "Sommerreifen",
    "Heckscheibenwischer",
    "Bluetooth",
    "Navigationssystem"
  ];

  return (
    <div className="md:p-4 p-2 w-full mx-auto rounded-lg font-sans bg-[#181818]">
      <div className="text-2xl sm:text-3xl font-bold mb-4">Detaildaten</div>

      {/* Characteristics Section */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Eigenschaften</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-1">
          {characteristics.map((item) => (
            <label key={item} className="flex items-center">
              <Controller
                name="detailedData.characteristics"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    type="checkbox"
                    checked={value?.includes(item)}
                    onChange={() =>
                      onChange(
                        value?.includes(item)
                          ? value.filter((i) => i !== item)
                          : [...(value || []), item]
                      )
                    }
                    className="mr-2"
                  />
                )}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="bg-gray-300 w-[90%] h-[1px] mx-auto md:mb-4 mb-2"></div>

      {/* Extras Section */}
      <div className="md:mb-4 mb-2">
        <h3 className="font-semibold mb-2">Extras</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-1">
          {extras.map((item) => (
            <label key={item} className="flex items-center">
              <Controller
                name="detailedData.extras"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    type="checkbox"
                    checked={value?.includes(item)}
                    onChange={() =>
                      onChange(
                        value?.includes(item)
                          ? value.filter((i) => i !== item)
                          : [...(value || []), item]
                      )
                    }
                    className="mr-2"
                  />
                )}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="bg-gray-300 w-[90%] h-[1px] mx-auto md:mb-4 mb-2"></div>

      {/* Comments Section */}
      <div className="md:mb-4 mb-2">
        <h3 className="font-semibold mb-2">Kommentare (öffentlich sichtbar)</h3>
        <Controller
          name="comments"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              className="w-full rounded-lg p-2 text-white bg-brGray"
              rows="4"
            />
          )}
        />
      </div>

      <div className="bg-gray-300 w-[90%] h-[1px] mx-auto md:mb-4 mb-2"></div>

      {/* Image Upload Section */}
      {/* <div className="md:mb-4 mb-2">
        <h3 className="font-semibold mb-2">Bilder Hochladen</h3>
        <div className="border-2 border-dashed border-gray-400 h-auto flex flex-wrap items-center justify-center text-white bg-brGray rounded">
          <input
            type="file"
            name="images"
            className="hidden"
            multiple
          />
          <label className="cursor-pointer">
            <div className="text-center">Choose Images</div>
          </label>
        </div>
      </div> */}
    </div>
  );
};

const CarDetails_7 = ({ control, setValue }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showFileInput, setShowFileInput] = useState(false);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));
    setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);

    setValue('images', uploadedImages);
    setShowFileInput(false);
  };

  const handleAddMoreClick = () => {
    setShowFileInput(true);
  };

  const handleRemoveAllClick = () => {
    setUploadedImages([]);
    setValue('images', []); 
  };

  const commonClasses = "block w-full p-2 rounded bg-brGray text-white border border-gray-300";

  return (
    <div className="w-full mx-auto md:p-4 p-2 rounded-lg bg-[#181818]">
      <div className="md:mb-4 mb-2">
        <div className={`border-2 border-dashed border-gray-400 h-auto flex flex-wrap items-center justify-center text-white bg-brGray ${uploadedImages[0] ? "p-1" : "p-4"} rounded`}>
          {uploadedImages.length > 0 ? (
            <div className="w-full">
              <div className="flex flex-wrap justify-center">
                {uploadedImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="h-40 w-40 object-contain m-2"
                  />
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <Button
                  onClick={handleAddMoreClick}
                  className="px-4 py-2 bg-brGold text-white rounded hover:bg-brGold-dark"
                >
                  Add More
                </Button>

                <Button
                  onClick={handleRemoveAllClick}
                  className="px-4 py-2 bg-white text-black rounded"
                >
                  Remove All
                </Button>
              </div>

              {showFileInput && (
                <div className="mt-4">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      className="hidden"
                      multiple
                    />
                    <div className="px-4 py-2 border border-gray-300 rounded bg-[#181818] text-white">
                      Choose More Images
                    </div>
                  </label>
                </div>
              )}
            </div>
          ) : (
            <label className="cursor-pointer">
              <div className="text-center">Bilder Hochladen</div>
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
                multiple
              />
            </label>
          )}
        </div>
      </div>

      <div className="text-3xl font-bold md:mb-4 mb-2">Kontaktdaten</div>
      <div className="text-xl font-semibold">
        Hauptadresse (Rechnungsadresse)
      </div>

      {/* Contact Details Form */}
      <div className="md:mb-4 mb-2">
        <h3 className="font-semibold mb-2 mt-1">Anrede</h3>
        <div className="flex w-full gap-5">
          {['mr', 'mrs', 'firm'].map((salutation) => (
            <div key={salutation} className="flex items-center mb-2">
              <Controller
                name="contactDetails.salutation"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="radio"
                    value={salutation}
                    checked={field.value === salutation}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="mr-2"
                  />
                )}
              />
              <label htmlFor={salutation}>
                {salutation === 'mr' ? 'Herr' : salutation === 'mrs' ? 'Frau' : 'Firma'}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="lastName">
          Nachname
        </label>
        <Controller
          name="contactDetails.lastName"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="firstName">
          Vorname
        </label>
        <Controller
          name="contactDetails.firstName"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="street">
          Strasse (optional)
        </label>
        <Controller
          name="contactDetails.street"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="houseNumber">
          Hausnummer (optional)
        </label>
        <Controller
          name="contactDetails.houseNumber"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="postCode">
          PLZ
        </label>
        <Controller
          name="contactDetails.zipCode"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="city">
          Ort
        </label>
        <Controller
          name="contactDetails.location"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="country">
          Land
        </label>
        <Controller
          name="contactDetails.country"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="phone">
          Telefonnummer
        </label>
        <Controller
          name="contactDetails.phoneNumber"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="email">
          E-Mail
        </label>
        <Controller
          name="contactDetails.email"
          control={control}
          render={({ field }) => (
            <input {...field} type="email" className={commonClasses} />
          )}
        />
      </div>

      <div className="md:mb-4 mb-2">
        <label className="block font-semibold mb-2" htmlFor="website">
          Webseite (optional)
        </label>
        <Controller
          name="contactDetails.website"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className={commonClasses} />
          )}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between md:mt-4 mt-2">
        <Button
          type="button"
          className="bg-white text-black md:px-4 md:w-[10vw] px-2 md:py-2 py-1 rounded-md"
        >
          Zurück
        </Button>
        <Button
          type="submit"
          className="bg-brGold text-white md:w-[10vw] md:px-4 px-2 md:py-2 py-1 rounded-md"
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};
