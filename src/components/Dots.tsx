export default function Dots() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[var(--frame-max-w)]">
      <div className="absolute inset-y-0 w-48 [mask-image:linear-gradient(to_bottom,transparent,black_6rem,black_calc(100%_-_6rem),transparent)] right-full">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_78%)]">
          <div className="frame-gutter-dots absolute inset-0"></div>
          <div
            className="frame-gutter-dots-lit absolute inset-0"
            style={{
              "--gutter-x": "1037.41015625px",
              "--gutter-y": "44.65468215942383px",
              "--gutter-lit": "0",
            }}
          ></div>
        </div>
      </div>
      <div className="absolute inset-y-0 w-48 [mask-image:linear-gradient(to_bottom,transparent,black_6rem,black_calc(100%_-_6rem),transparent)] left-full">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_right,black,transparent_78%)]">
          <div className="frame-gutter-dots absolute inset-0"></div>
          <div
            className="frame-gutter-dots-lit absolute inset-0"
            style={{
              "--gutter-x": "1037.41015625px",
              "--gutter-y": "44.65468215942383px",
              "--gutter-lit": "0",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
