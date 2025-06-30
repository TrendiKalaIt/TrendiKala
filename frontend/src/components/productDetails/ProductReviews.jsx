import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

// Helper to calculate average rating
const getAvgRating = (reviews) => {
  if (!reviews?.length) return 0;
  return (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
};

// Star icon component
const StarIcon = ({ filled }) => (
  <Star className={`w-5 h-5 ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
);

// Verified badge icon
const CheckCircleIcon = () => (
  <CheckCircle className="w-4 h-4 text-green-500 inline-block ml-1" />
);

// Single review card
const ReviewCard = ({ review }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#35894E] flex flex-col justify-between">
    <div>
      {/* Star rating */}
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>
      {/* Author and verified badge */}
      <p className="text-[#35894E] font-semibold text-lg mb-1">
        {review.author}
        {review.verified && <CheckCircleIcon />}
      </p>
      {/* Comment */}
      <p className="text-[#93A87E] text-sm leading-relaxed mb-3">{review.comment}</p>
    </div>
    {/* Date */}
    <p className="text-[#35894E] text-xs italic">Posted on {review.date}</p>
  </div>
);

// Overall reviews component
const ProductReviews = ({ reviews = [] }) => {
  const avgRating = getAvgRating(reviews);
  const reviewsCount = reviews.length;

  return (
    <div className="font-sans antialiased min-h-screen text-gray-800 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#35894E] mb-4 sm:mb-0">
            All Reviews <span className="text-[#35894eb7]">({reviewsCount})</span>
          </h2>
        </div>

        {/* Ratings summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#35894E] mb-6">
          <h3 className="text-xl font-semibold text-[#35894E] mb-2">Overall Customer Rating</h3>
          <div className="flex items-center text-xl font-bold text-[#35894E]">
            {avgRating} out of 5 stars
            <div className="flex ml-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={`avg-star-${i}`}
                  size={20}
                  fill={i < Math.round(avgRating) ? '#FFC107' : '#E0E0E0'}
                  stroke={i < Math.round(avgRating) ? '#FFC107' : '#A0A0A0'}
                />
              ))}
            </div>
          </div>
          <p className="text-[#93A87E] text-sm mt-1">Based on {reviewsCount} reviews</p>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
