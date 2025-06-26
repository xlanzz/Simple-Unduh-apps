"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, Home, AlertCircle, Gamepad2 } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-black flex items-center justify-center">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>

          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="bg-gray-900/40 border-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-12 space-y-8">
                {/* Error Icon */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto border border-gray-700/50">
                    <AlertCircle className="h-16 w-16 text-red-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ERR</span>
                  </div>
                </div>

                {/* Error Message */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Something Went Wrong
                  </h1>
                  <p className="text-gray-400 text-lg max-w-md mx-auto">
                    An unexpected error occurred while loading the application. Don't worry, we're here to help!
                  </p>
                </div>

                {/* Gaming Theme Message */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Gamepad2 className="h-6 w-6 text-red-400" />
                    <h3 className="text-white font-semibold">System Error!</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    The gaming system encountered an unexpected error. Let's try to get you back in the game!
                  </p>
                </div>

                {/* Error Details (Development) */}
                {process.env.NODE_ENV === "development" && (
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 text-left">
                    <h4 className="text-red-400 font-semibold mb-2">Error Details (Development)</h4>
                    <pre className="text-xs text-gray-300 overflow-auto max-h-32">{error.message}</pre>
                    {error.digest && <p className="text-xs text-gray-400 mt-2">Digest: {error.digest}</p>}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={reset}
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 py-3 text-lg w-full sm:w-auto"
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Try Again
                  </Button>

                  <Button
                    variant="outline"
                    className="border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-800/50 px-8 py-3 text-lg w-full sm:w-auto"
                    onClick={() => (window.location.href = "/")}
                  >
                    <Home className="mr-2 h-5 w-5" />
                    Go Home
                  </Button>
                </div>

                {/* Footer Info */}
                <div className="pt-6 text-xs text-gray-500">
                  <p>If this error persists, please contact our support team.</p>
                  <p className="mt-1">We apologize for the inconvenience.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </body>
    </html>
  )
}
