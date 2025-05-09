"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBook, FaUserGraduate, FaCalendarAlt, FaGlobe, FaAward, FaMedal, FaLaptop, FaComment, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "أحمد محمود",
      role: "طالب",
      image: "",
      text: "منصة كتّاب ساعدتني كثيراً في تعلم القرآن الكريم والتجويد. المعلمون هنا محترفون وصبورون."
    },
    {
      name: "فاطمة علي",
      role: "والدة طالب",
      image: "",
      text: "ابني أصبح يحب تعلم القرآن بفضل المعلمين المتميزين في كتّاب. أنا سعيدة جداً بالتقدم الذي حققه."
    },
    {
      name: "محمد السيد",
      role: "معلم",
      image: "",
      text: "كتّاب منصة رائعة تتيح لي الوصول إلى طلاب من جميع أنحاء العالم وتمكنني من نشر علمي بكل سهولة."
    }
  ];

  const features = [
    {
      icon: <FaUserGraduate className="text-3xl text-emerald-600" />,
      title: "معلمون محترفون",
      description: "نخبة من أفضل المعلمين والمعلمات في مجال تعليم القرآن والعلوم الإسلامية"
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-emerald-600" />,
      title: "جلسات مرنة",
      description: "اختر الوقت المناسب لجدولك واحجز جلساتك التعليمية بكل سهولة"
    },
    {
      icon: <FaGlobe className="text-3xl text-emerald-600" />,
      title: "دروس عن بعد",
      description: "تعلم من أي مكان في العالم عبر منصة تواصل احترافية واضحة"
    },
    {
      icon: <FaBook className="text-3xl text-emerald-600" />,
      title: "مناهج متنوعة",
      description: "تخصصات متعددة في علوم القرآن والتجويد والتفسير واللغة العربية"
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section with Islamic Pattern Overlay */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/images/islamic-pattern.png')] opacity-10 bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-blue-900/70 to-gray-900/70"></div>
        
        <div className="container mx-auto px-4 py-16 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-right lg:max-w-2xl">
              <div className="inline-block animate-float">
                <div className="bg-white dark:bg-gray-800 px-4 py-1 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6 mx-auto lg:mx-0 inline-flex items-center">
                  <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-emerald-500 ml-2"></span>
                  منصة تعليمية متميزة
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" dir="rtl">
                تعلم 
                <span className="text-gradient bg-gradient-to-r from-emerald-400 to-blue-500"> القرآن الكريم </span>
                مع أفضل المعلمين
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0" dir="rtl">
                منصة كُـــتَّـــاب تجمع بين الطلاب والمعلمين المتميزين لجلسات تعليمية عالية الجودة عبر الإنترنت. ابدأ رحلتك التعليمية الآن.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <Link 
                  href="/teachers" 
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <FaUserGraduate />
                  <span>ابدأ الآن</span>
                </Link>
                
                <Link 
                  href="/about" 
                  className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium text-lg transition-all duration-300 border border-white/20 transform hover:scale-105"
                >
                  اكتشف المزيد
                </Link>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-300">طالب مسجل</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-xs text-gray-300">معلم متميز</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-xs text-gray-300">جلسة ناجحة</div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-emerald-900 to-blue-900 rounded-xl p-2 shadow-2xl z-10">
                <div className="rounded-lg overflow-hidden border-2 border-white/20 shadow-inner">
                  <Image 
                    src="/images/learn-quran2.avif"
                    alt="تعليم القرآن" 
                    width={600} 
                    height={600} 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <FaAward className="text-emerald-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-bold text-gray-900 dark:text-white">تجربة فريدة</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">منصة تعليمية مميزة</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaMedal className="text-blue-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-bold text-gray-900 dark:text-white">معلمون متميزون</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">خبرة عالية في التعليم</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Features */}
      <section id="business" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">لماذا تختار منصة <span className="text-emerald-600 dark:text-emerald-500">كُـــتَّـــاب</span>؟</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              نقدم لك تجربة تعليمية فريدة من نوعها مع أفضل المعلمين وأحدث التقنيات لضمان أقصى استفادة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 transition-transform hover:scale-105 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Banner */}
          <div className="mt-16 relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-[url('/images/islamic-pattern.png')] opacity-5 bg-repeat"></div>
            <div className="bg-gradient-to-r from-emerald-600 to-blue-700 p-8 md:p-12 text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">ابدأ رحلتك التعليمية اليوم</h3>
              <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
                احجز جلستك الأولى مع أحد معلمينا المتميزين واستمتع بتجربة تعليمية فريدة من نوعها
              </p>
              <Link
                href="/teachers"
                className="px-8 py-3 rounded-full bg-white text-emerald-600 font-medium text-lg hover:bg-emerald-50 transition-colors duration-300 inline-block shadow-lg"
              >
                تصفح المعلمين
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/islamic-pattern.png')] opacity-5 bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 blur-2xl opacity-20 -z-10 transform rotate-3"></div>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden shadow-xl h-40 transform translate-y-8 border-4 border-white dark:border-gray-700">
                      <Image
                        src="/images/learn-quran.jpg"
                        alt="تعليم القرآن"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl h-64 border-4 border-white dark:border-gray-700">
                      <Image
                        src="/images/learn-online.png"
                        alt="جلسات تعليمية"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden shadow-xl h-64 border-4 border-white dark:border-gray-700">
                      <Image
                        src="/images/kid-learns-online.png"
                        alt="معلمون"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl h-40 transform translate-y-0 border-4 border-white dark:border-gray-700">
                      <Image
                        src="/images/man-reading.avif"
                        alt="التعلم عن بعد"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
                من نحن
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white" dir="rtl">
                منصة <span className="text-emerald-600">كُـــتَّـــاب</span> للتعليم الإسلامي عن بعد
              </h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400" dir="rtl">
                تأسست منصة كُـــتَّـــاب بهدف نشر تعليم القرآن الكريم والعلوم الإسلامية بطريقة ميسرة وحديثة تتناسب مع متطلبات العصر، وتمكن الطلاب من التعلم في أي وقت ومن أي مكان.
              </p>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400" dir="rtl">
                نسعى لتوفير بيئة تعليمية تفاعلية وآمنة تجمع بين الأصالة والحداثة، مع فريق من المعلمين والمعلمات ذوي الخبرة والكفاءة العالية في مختلف التخصصات.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <FaUserGraduate className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">معلمون مجازون</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">بإجازات معتمدة</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <FaLaptop className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">منصة متطورة</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">سهلة الاستخدام</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <FaBook className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">مناهج متنوعة</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">لجميع المستويات</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <FaComment className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">دعم مستمر</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">على مدار الساعة</div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
              >
                تعرف علينا أكثر
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/islamic-pattern.png')] opacity-5 bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
              تجارب الطلاب
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">ماذا يقول طلابنا عن منصة كُـــتَّـــاب؟</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              آراء حقيقية من طلاب استفادوا من خدماتنا التعليمية
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 blur-2xl opacity-10 -z-10 transform rotate-3"></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 md:p-10 relative z-10">
              <div className="mb-10">
                <div className="text-gray-800 dark:text-gray-200 text-lg md:text-xl italic line-clamp-1">
                  "{testimonials[activeTestimonial].text}"
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-300 dark:border-emerald-700">
                    {testimonials[activeTestimonial].image ? (
                      <Image 
                        src={testimonials[activeTestimonial].image} 
                        alt={testimonials[activeTestimonial].name}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-600">
                        <FaUserCircle className="w-14 h-14" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonials[activeTestimonial].name}</div>
                    <div className="text-sm text-emerald-600 dark:text-emerald-400">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                    className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-2 h-2 mx-1 rounded-full ${activeTestimonial === index ? 'bg-emerald-600 w-6' : 'bg-gray-300 dark:bg-gray-600'} transition-all`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('/images/islamic-pattern.png')] opacity-5 bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
              تواصل معنا
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">نحن هنا لمساعدتك</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              هل لديك أسئلة أو استفسارات؟ فريقنا جاهز للرد عليك
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">أرسل لنا رسالة</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2" htmlFor="name">الاسم</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                      placeholder="أدخل اسمك" 
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2" htmlFor="email">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                      placeholder="أدخل بريدك الإلكتروني" 
                      dir="rtl"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2" htmlFor="subject">الموضوع</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                    placeholder="موضوع الرسالة" 
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2" htmlFor="message">الرسالة</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                    placeholder="اكتب رسالتك هنا" 
                    dir="rtl"
                  />
                </div>
                
                <button 
                  type="button" 
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">معلومات التواصل</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">رقم الهاتف</div>
                      <div className="text-gray-600 dark:text-gray-400" dir="ltr">+966 123 456 789</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">البريد الإلكتروني</div>
                      <div className="text-gray-600 dark:text-gray-400">info@kottab.com</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">العنوان</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        المملكة العربية السعودية، الرياض<br />
                        طريق الملك فهد، مبنى الأمانة
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">ساعات العمل</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>السبت - الخميس: 9 صباحاً - 10 مساءً</p>
                  <p>الجمعة: مغلق</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-blue-800 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/islamic-pattern.png')] opacity-10 bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:max-w-lg">
              <h2 className="text-3xl font-bold mb-4" dir="rtl">ابدأ رحلة التعلم مع كُـــتَّـــاب اليوم</h2>
              <p className="text-lg text-emerald-100" dir="rtl">انضم إلى آلاف الطلاب الذين يتعلمون القرآن الكريم والعلوم الإسلامية على منصتنا</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link 
                href="/teachers" 
                className="px-8 py-3 rounded-full bg-white text-emerald-700 font-medium text-lg hover:bg-emerald-50 transition-colors duration-300 shadow-lg"
              >
                تصفح المعلمين
              </Link>
              <Link 
                href="/auth/signup" 
                className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 border border-white/20 text-white font-medium text-lg transition-colors duration-300 shadow-lg"
              >
                إنشاء حساب
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for text gradient and animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}} />
    </main>
  );
}
