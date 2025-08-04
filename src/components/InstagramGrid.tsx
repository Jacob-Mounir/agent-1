import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
}

const InstagramGrid = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch('/functions/v1/instagram-feed', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (error) {
        // Log minimal error information
        console.error('Instagram feed error');
        toast({
          title: "Instagram Feed Unavailable",
          description: "Unable to load Instagram posts at the moment.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [toast]);

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Instagram className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Follow Our Journey
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Behind the scenes and latest work from @agentsandscouts
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-muted animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Follow Our Journey
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Behind the scenes and latest work from @agentsandscouts
          </motion.p>
        </div>

        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {posts.slice(0, 8).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => window.open(post.permalink, '_blank')}
                >
                  <img
                    src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                    alt={post.caption ? post.caption.slice(0, 100) : 'Instagram post'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  {post.media_type === 'VIDEO' && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-b-2 border-t-transparent border-b-transparent ml-0.5" />
                      </div>
                    </div>
                  )}
                  {post.media_type === 'CAROUSEL_ALBUM' && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-0.5">
                          <div className="w-1 h-1 bg-white rounded-full" />
                          <div className="w-1 h-1 bg-white rounded-full" />
                          <div className="w-1 h-1 bg-white rounded-full" />
                          <div className="w-1 h-1 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <a
                href="https://instagram.com/agentsandscouts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
              >
                <Instagram className="w-5 h-5" />
                Follow @agentsandscouts
              </a>
            </motion.div>
          </>
        ) : (
          <div className="text-center py-20">
            <Instagram className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No posts available</h3>
            <p className="text-muted-foreground mb-8">
              Instagram feed is currently unavailable. Check back later!
            </p>
            <a
              href="https://instagram.com/agentsandscouts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              Visit Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramGrid;