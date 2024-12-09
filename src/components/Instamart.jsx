import { useState } from "react";

const Section = ({ title, desc, isvisible, setisvisible }) => {
  //  const [isvisible, setisvisible] = useState(false);
  // state lifting :- it is a technique where we pass the state to the parent component from the child component.

  return (
    <div className="border m-2 p-2 border-blue-300">
      <h3 className="text-xl font-medium m-3 ">{title}</h3>

      {isvisible ? (
        <button
          onClick={() => {
            setisvisible(null);
          }}
          className="m-3 font-sm border p-1 rounded"
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => {
            setisvisible(title);
          }}
          className="m-3 font-sm border p-1 rounded"
        >
          show
        </button>
      )}

      {isvisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {

  const [visibleSection, setVisibleSection] = useState(null);

  return (
    <div className="border border-black m-6">
      <h1 className="text-3xl p-2 m-2 font-bold"> Instamart </h1>

      <Section
        title={"about instamart"}
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isvisible={visibleSection == "about instamart"}
        setisvisible={(section) => {
          setVisibleSection(section);
        }}
      />

      <Section
        title={"about careers"}
        desc="ht is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        isvisible={visibleSection === "about careers"}
        setisvisible={(section) => {
          setVisibleSection(section);
        }}
      />

      <Section
        title={"about team"}
        desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
        isvisible={visibleSection === "about team"}
        setisvisible={(section) => {
          setVisibleSection(section);
        }}
      />
    </div>
  );
};

export default Instamart;
