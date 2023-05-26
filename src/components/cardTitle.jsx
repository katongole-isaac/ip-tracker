/**
 * Card Title Component
 *
 */
const CardTitle = ({ title }) => {
  return (
    <p className="text-uppercase text-muted mb-2 " style={{ fontWeight: 500, fontSize: 16 }}>
      {title}
    </p>
  );
};

export default CardTitle;
