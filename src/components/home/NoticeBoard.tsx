import { useState } from 'react';
import { Bell, Download, AlertTriangle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { notices } from '@/data/notices';

const NoticeBoard = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  const latestNotices = notices.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Using a clear, bold font for the main title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            पछिल्लो सूचना / Latest Notices
          </h2>
          {/* Added Nepali translation for consistency */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            हाम्रा पछिल्ला घोषणाहरू र महत्वपूर्ण जानकारीहरूबाट अपडेट रहनुहोस् / Stay updated with our latest announcements and important information
          </p>
        </div>

        {/* Latest notices ticker with a modern, darker theme */}
        <div className="mb-8 bg-teal-800 text-white rounded-lg p-4 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="w-5 h-5 animate-bounce text-lime-400" />
            <span className="font-semibold text-lime-400">LATEST NOTICE:</span>
          </div>
          <div 
            className={`whitespace-nowrap ${isScrolling ? 'animate-marquee' : ''}`}
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={() => setIsScrolling(true)}
          >
            {notices.map((notice) => (
              <span key={notice.id} className="inline-block mr-12 text-gray-200 hover:text-white transition-colors cursor-pointer">
                {notice.title} ({notice.date}) •
              </span>
            ))}
          </div>
        </div>

        {/* Notice cards with clean shadows and hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {latestNotices.map((notice) => (
            <Card key={notice.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {notice.title}
                  </CardTitle>
                  {notice.isUrgent && (
                    <Badge variant="destructive" className="flex items-center gap-1 flex-shrink-0 bg-red-600 text-white">
                      <AlertTriangle className="w-3 h-3" />
                      Urgent
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  <span>{notice.date}</span>
                </div>
                {notice.description && (
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {notice.description}
                  </p>
                )}
                {notice.pdfUrl && (
                  <Button asChild variant="outline" size="sm" className="w-full border-teal-600 text-teal-700 hover:bg-teal-50">
                    <a href={notice.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main call-to-action button with a subtle gradient */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg">
            <Link to="/notices">
              <Bell className="w-5 h-5 mr-2" />
              सबै सूचना हेर्नुहोस् / View All Notices
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
