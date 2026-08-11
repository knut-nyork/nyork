import { FormsPlaceholder } from './FormsPlaceholder.jsx';

// figma node: 2004:59 icon_slot_placeholder
export function FormsIconSlotPlaceholder(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <FormsPlaceholder />}</div>
    </div>
  );
}
export default FormsIconSlotPlaceholder;
