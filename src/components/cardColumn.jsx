/**
 * CardColumn - Wrapper around Ip details display
 *
 */

import CardContent from "./cardContent";
import CardTitle from "./cardTitle";

const CardColumn = ({ title, content, classes = "card-column" }) => {
  return (
    <div className={`col-sm border-0 card-col ${classes}`}>
      <CardTitle title={title} />
      <CardContent content={content} />
    </div>
  );
};

export default CardColumn;
