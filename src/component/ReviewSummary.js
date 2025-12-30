const ReviewSummary = ({ totalReviews, rating, onClick }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between px-5 py-1 cursor-pointer mb-2"
      onClick={onClick}
    >
      <span className="text-warning fw-medium">
        Review {totalReviews}
      </span>

      <div className="d-flex align-items-center gap-2">
        <div className="fs-5 text-warning">
          ★ ★ ★ ★ <span className="text-secondary">★</span>
        </div>
        <span className="fw-bold fs-4">{rating}</span>
      </div>
    </div>
  );
};

export default ReviewSummary;
