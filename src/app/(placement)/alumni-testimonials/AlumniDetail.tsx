// src/components/AlumniDetail.tsx
'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Review } from '@/types/alumni';
import {
  BookOpen,
  GraduationCap,
  Heart,
  Mail,
  MessageSquare,
  Quote,
  Trophy
} from 'lucide-react';
import Image from 'next/image';

export default function AlumniDetail({ review }: { review: Review }) {
  return (
    <div className="min-h-screen w-full bg-text-col py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-[1680px] w-[87.5vw] mt-20 mx-auto bg-white shadow-sm rounded-12px">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Image
              src={review.photoUrl || 'https://avatar.vercel.sh/default'}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
              height={80}
              width={80}
              alt={review.name}
            />
            <div className="flex flex-col">
              <h1 className="text-title-1 font-semibold text-gray-900">
                {review.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-body text-gray-600">
                {review.designation && (
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {review.designation}
                  </span>
                )}
                {review.graduationYear && (
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    Batch of {review.graduationYear}
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Contact Information */}
          <div className="flex flex-wrap gap-4 text-body">
            {review.email && (
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{review.email}</span>
              </div>
            )}
            {review.course && (
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-4 h-4" />
                <span>{review.course}</span>
              </div>
            )}
          </div>

          {/* Testimonial */}
          <div className="bg-gray-100 p-6 rounded-12px">
            <div className="flex gap-2 items-start">
              <Quote className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <p className="text-gray-700 text-title-3 font-normal">
                {review.testimonial}
              </p>
            </div>
          </div>

          {/* Achievements */}
          {review.achievements && (
            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <h2 className="text-title-2 font-semibold text-gray-900">
                  Achievements
                </h2>
              </div>
              <p className="text-gray-700 text-title-3 font-normal">
                {review.achievements}
              </p>
            </div>
          )}

          {/* Memorable Experience */}
          {review.memorableExperience && (
            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-rose-500" />
                <h2 className="text-title-2 font-semibold text-gray-900">
                  Memorable Experience
                </h2>
              </div>
              <p className="text-gray-700 text-title-3 font-normal">
                {review.memorableExperience}
              </p>
            </div>
          )}

          {/* Encouragement */}
          {review.encouragement && (
            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                <h2 className="text-title-2 font-semibold text-gray-900">
                  Words of Encouragement
                </h2>
              </div>
              <p className="text-gray-700 text-title-3 font-normal">
                {review.encouragement}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
