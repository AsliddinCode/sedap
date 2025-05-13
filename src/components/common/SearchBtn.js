import Image from "next/image";

export default function SearchBtn(props) {
  const { img, num, back } = props;
  return (
    <button
      style={{
        padding: "10px 12px",
        borderRadius: "12px",
        backgroundColor: back,
        border: "none",
        marginRight: "30px",
        position: "relative",
      }}
    >
      <Image src={img} alt="gg" width={28} height={28} />
      <span
        style={{
          position: "absolute",
          top: "-6px",
          right: "-8px",
          padding: "1px 7px",
          border: "3px solid white",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "18px",
          color: "#ffffff",
          borderRadius: "50%",
          background: "#2d9cdb",
        }}
      >
        {num}
      </span>
    </button>
  );
}