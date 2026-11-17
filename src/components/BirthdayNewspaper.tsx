import React from 'react';
import type { NewspaperData } from '../types/birthday.ts';

interface BirthdayNewspaperProps {
  newspaper: NewspaperData;
}

export function BirthdayNewspaper({ newspaper }: BirthdayNewspaperProps) {
  return (
    <section className="border-b border-[#E8C2D4]/60 bg-[#E7D9C8]/45 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <article className="rounded-sm border border-[#3B1E2D]/30 bg-[#FBF7F0] p-6 text-[#2C1822] shadow-sm sm:p-10">
          {/* Masthead */}
          <header className="border-b-2 border-[#3B1E2D] pb-4 text-center">
            <p className="text-[11px] font-medium tracking-widest text-[#6E4A5D] uppercase">
              {newspaper.editionLine}
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight text-[#3B1E2D] sm:text-6xl">
              {newspaper.masthead}
            </h2>
          </header>

          {/* Lead Headline */}
          <div className="border-b border-[#3B1E2D]/30 py-6 text-center">
            <h3 className="font-serif text-3xl leading-tight font-bold text-[#3B1E2D] sm:text-5xl">
              {newspaper.mainHeadline}
            </h3>
            <p className="mt-2 font-serif text-lg italic text-[#6E4A5D] sm:text-xl">
              {newspaper.subHeadline}
            </p>
          </div>

          {/* 3-Column Broadsheet Grid */}
          <div className="grid gap-8 pt-6 md:grid-cols-12">
            {/* Main Story Column */}
            <div className="space-y-4 md:col-span-7 md:border-r md:border-[#3B1E2D]/20 md:pr-7">
              {newspaper.leadBody.map((para, idx) => (
                <p
                  key={idx}
                  className={`text-sm leading-relaxed text-[#3B1E2D] sm:text-base ${
                    idx === 0
                      ? 'first-letter:float-left first-letter:mr-2.5 first-letter:font-serif first-letter:text-5xl first-letter:leading-none first-letter:font-bold first-letter:text-[#9C6580]'
                      : ''
                  }`}
                >
                  {para}
                </p>
              ))}

              {/* Special Report Box */}
              <div className="mt-5 border border-[#3B1E2D]/35 bg-[#FCE7F0]/55 p-4">
                <h4 className="font-serif text-lg font-bold text-[#3B1E2D]">
                  {newspaper.specialReportTitle}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#3B1E2D] sm:text-sm">
                  {newspaper.specialReportBody}
                </p>
              </div>
            </div>

            {/* Side Columns */}
            <div className="space-y-6 md:col-span-5">
              {/* Person of the Year */}
              <div className="border-b border-[#3B1E2D]/20 pb-5">
                <p className="text-[11px] font-semibold tracking-widest text-[#9C6580] uppercase">
                  Person of the Year
                </p>
                <h4 className="mt-1 font-serif text-2xl font-bold text-[#3B1E2D]">
                  {newspaper.personOfYear.name}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#6E4A5D] sm:text-sm">
                  {newspaper.personOfYear.citation}
                </p>
              </div>

              {/* Most Anticipated Event */}
              <div className="border-b border-[#3B1E2D]/20 pb-5">
                <p className="text-[11px] font-semibold tracking-widest text-[#9C6580] uppercase">
                  Most Anticipated Event
                </p>
                <h4 className="mt-1 font-serif text-xl font-bold text-[#3B1E2D]">
                  {newspaper.anticipatedEvent.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#6E4A5D] sm:text-sm">
                  {newspaper.anticipatedEvent.detail}
                </p>
              </div>

              {/* Exclusive Wishes */}
              <div className="border-b border-[#3B1E2D]/20 pb-5">
                <p className="text-[11px] font-semibold tracking-widest text-[#9C6580] uppercase">
                  Exclusive Birthday Wishes
                </p>
                <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#3B1E2D] sm:text-sm">
                  {newspaper.exclusiveWishes.map((wish, idx) => (
                    <li key={idx}>• {wish}</li>
                  ))}
                </ul>
              </div>

              {/* Entertainment Horoscope */}
              <div className="bg-[#DCCEF4]/35 p-4">
                <p className="text-[10px] font-semibold tracking-widest text-[#6E4A5D] uppercase">
                  {newspaper.horoscope.disclaimer}
                </p>
                <h4 className="mt-1 font-serif text-lg font-bold text-[#3B1E2D]">
                  {newspaper.horoscope.lilySign}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#3B1E2D]">
                  {newspaper.horoscope.lilyForecast}
                </p>
                <p className="mt-2 text-xs italic text-[#6E4A5D]">
                  {newspaper.horoscope.friendNote}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
