import { useState } from 'react';
import { Download, Calendar, AlertTriangle, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { notices } from '@/data/notices';
import requestImage from '@/assets/request.png';  // Import your request image

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUrgent, setFilterUrgent] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isNoticeDialogOpen, setIsNoticeDialogOpen] = useState(false);
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false); // New state for request image dialog

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          notice.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterUrgent || notice.isUrgent;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              सूचना / Notices
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Stay up to date with the latest announcements, updates, and important information related to our services and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search notices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant={filterUrgent ? "default" : "outline"}
                onClick={() => setFilterUrgent(!filterUrgent)}
                className={`flex items-center gap-2 ${filterUrgent ? 'bg-red-600 text-white hover:bg-red-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              >
                <Filter className="w-4 h-4" />
                {filterUrgent ? "Showing Urgent Only" : "Show Urgent Only"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredNotices.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-gray-600">
                  No notices found matching your search criteria.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredNotices.map((notice) => (
                  <Card key={notice.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50">
                    <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-4">
                          <CardTitle className="text-xl font-bold text-gray-800 flex-1">
                            {notice.title}
                          </CardTitle>
                          {notice.isUrgent && (
                            <Badge className="bg-red-600 text-white flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" />
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm">{notice.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{notice.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0 md:self-end">
                        {notice.pdfUrl && (
                          <Button asChild variant="outline" size="sm" className="border-teal-600 text-teal-700 hover:bg-teal-50">
                            <a href={notice.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </a>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-700 hover:bg-gray-200"
                          onClick={() => {
                            setSelectedNotice(notice);
                            setIsNoticeDialogOpen(true);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Request to Customers Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
              ग्राहकलाई अनुरोध / Request to Customers
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Important notice for all our valued customers. Please review the request below.
            </p>
            <div
              className="cursor-pointer inline-block shadow-lg hover:shadow-xl transition-all duration-300 rounded-md overflow-hidden max-w-lg mx-auto"
              onClick={() => setIsRequestDialogOpen(true)}
            >
              <img
                src={requestImage}
                alt="Request to Customers"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notice Subscription Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our notification service to receive important updates
              and announcements directly to your phone or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email address" className="border-gray-300 focus:border-teal-500" />
              <Button className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              You can also follow us on our social media channels for real-time updates.
            </p>
          </div>
        </div>
      </section>
      
      {/* Notice Detail Dialog */}
      <Dialog open={isNoticeDialogOpen} onOpenChange={setIsNoticeDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedNotice && (
            <div className="p-4">
              <DialogHeader className="mb-4">
                <div className="flex justify-between items-start">
                  <DialogTitle className="text-2xl font-bold text-gray-800">
                    {selectedNotice.title}
                  </DialogTitle>
                  {selectedNotice.isUrgent && (
                    <Badge className="bg-red-600 text-white flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Urgent
                    </Badge>
                  )}
                </div>
                <DialogDescription className="text-gray-500 text-sm mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedNotice.date}</span>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
                <p>{selectedNotice.description}</p>
                {selectedNotice.pdfUrl && (
                  <Button asChild size="sm" className="w-full bg-teal-700 hover:bg-teal-800 text-white">
                    <a href={selectedNotice.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Request Image Dialog */}
      <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <img
            src={requestImage}
            alt="Request to Customers Large View"
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notices;
