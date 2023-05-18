import React from "react";
import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating, numReviews }) => {
  return (
    <div className={styles.rating}>
      <span>
        {rating >= 1 ? (
          <FontAwesomeIcon icon={faStar} className={styles["star-icon"]} />
        ) : rating >= 0.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className={styles["star-icon"]}
          />
        ) : (
          <FontAwesomeIcon icon={emptyStar} />
        )}
      </span>

      <span>
        {rating >= 2 ? (
          <FontAwesomeIcon icon={faStar} className={styles["star-icon"]} />
        ) : rating >= 1.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className={styles["star-icon"]}
          />
        ) : (
          <FontAwesomeIcon icon={emptyStar} />
        )}
      </span>

      <span>
        {rating >= 3 ? (
          <FontAwesomeIcon icon={faStar} className={styles["star-icon"]} />
        ) : rating >= 2.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className={styles["star-icon"]}
          />
        ) : (
          <FontAwesomeIcon icon={emptyStar} />
        )}
      </span>

      <span>
        {rating >= 4 ? (
          <FontAwesomeIcon icon={faStar} className={styles["star-icon"]} />
        ) : rating >= 3.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className={styles["star-icon"]}
          />
        ) : (
          <FontAwesomeIcon icon={emptyStar} />
        )}
      </span>

      <span>
        {rating >= 5 ? (
          <FontAwesomeIcon icon={faStar} className={styles["star-icon"]} />
        ) : rating >= 4.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className={styles["star-icon"]}
          />
        ) : (
          <FontAwesomeIcon icon={emptyStar} />
        )}
      </span>

      <span className={styles.num}>({numReviews} Reviews)</span>
    </div>
  );
};

export default Rating;
