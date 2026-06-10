import { Newspaper } from "lucide-react";

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80&w=2942" 
            alt="Blog Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trionex Insights</h1>
          <p className="text-xl text-slate-300 font-light">
            Stay updated with our latest news, project announcements, and construction insights.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
               <Newspaper className="w-10 h-10 text-amber-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Content Coming Soon</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              We are currently focusing on laying the groundwork for our foundational projects. Check back soon for company updates, engineering articles, and project showcase posts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
