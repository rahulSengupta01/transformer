// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Transformer - Free Transform your File</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Elevate Your Content with Transformer
              Experience the power of Transformer, the premier online tool for seamless and free multimedia conversion.
              Whether it's images, audio, or videos, transform your files with ease and without limitations. 
              Begin your creative journey today and take your content to the next level!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
