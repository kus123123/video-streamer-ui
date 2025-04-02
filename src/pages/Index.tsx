
import React from 'react';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  // This URL points to your backend server
  const videoUrl = 'http://localhost:3000';

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Video Player</CardTitle>
            <CardDescription>
              Streaming directly from your Node.js server
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VideoPlayer videoUrl={videoUrl} />
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>About This Player</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This video player connects to a Node.js streaming server that efficiently 
                streams video content without loading the entire file. The custom controls 
                provide a seamless viewing experience with playback control, volume adjustment, 
                and fullscreen capabilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The backend uses Node.js file streaming to deliver video content efficiently. 
                When you press play, the video is streamed in chunks rather than downloaded entirely, 
                allowing for faster start times and reduced bandwidth usage.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
