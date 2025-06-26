"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ArrowLeft, Gamepad2, AlertTriangle, RefreshCw } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="bg-gray-900/40 border-gray-800/50 backdrop-blur-sm">
          <CardContent className="p-12 space-y-8">
            {/* 404 Icon */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto border border-gray-700/50">
                <AlertTriangle className="h-16 w-16 text-orange-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">404</span>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Page Not Found
              </h1>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the
                wrong URL.
              </p>
            </div>

            {/* Gaming Theme Message */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Gamepad2 className="h-6 w-6 text-purple-400" />
                <h3 className="text-white font-semibold">Game Over!</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Looks like you've wandered into uncharted territory. Let's get you back to the gaming hub!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 text-lg w-full sm:w-auto">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>

              <Button
                variant="outline"
                className="border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-800/50 px-8 py-3 text-lg w-full sm:w-auto"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>

            {/* Additional Help */}
            <div className="pt-6 border-t border-gray-800/50">
              <h4 className="text-white font-semibold mb-4">What can you do?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Search className="h-4 w-4 text-blue-400" />
                  <span>Search for apps on our homepage</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <RefreshCw className="h-4 w-4 text-green-400" />
                  <span>Refresh the page and try again</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Home className="h-4 w-4 text-purple-400" />
                  <span>Visit our main dashboard</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Gamepad2 className="h-4 w-4 text-pink-400" />
                  <span>Browse our gaming collection</span>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="pt-6 text-xs text-gray-500">
              <p>Error Code: 404 | Page Not Found</p>
              <p className="mt-1">If you believe this is an error, please contact support.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
