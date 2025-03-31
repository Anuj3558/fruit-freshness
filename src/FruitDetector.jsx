// src/App.js
"use client"

import { useState, useEffect } from "react"
import { Camera, Settings, Home, BarChart, User, AlertCircle } from "lucide-react"

const API_BASE_URL = `http://10.12.0.120:5000/api`

const FruitDetectorApp = () => {
  const [activeStep, setActiveStep] = useState("idle") // idle, capturing, analyzing, complete
  const [imageData, setImageData] = useState(null)
  const [sensorData, setSensorData] = useState(null)
  const [prediction, setPrediction] = useState(null)
  const [error, setError] = useState(null)
  const [progress, setProgress] = useState(0)
  const [isConnected, setIsConnected] = useState(false)

  // Check server connection on mount
  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/status`)
      if (response.ok) {
        setIsConnected(true)
        console.log(sensorData)
      }
    } catch (err) {
      setError("Cannot connect to Raspberry Pi server")
      console.log(err)
      setIsConnected(false)
    }
  }

  const startDetection = async () => {
    try {
      setError(null)
      setActiveStep("capturing")
      
      // Capture image from Pi camera
      const imageResponse = await fetch(`${API_BASE_URL}/camera/capture`, {
        method: 'POST'
      })
      
      if (!imageResponse.ok) throw new Error('Failed to capture image')
      const imageResult = await imageResponse.json()
      setImageData(`${API_BASE_URL}/images/${imageResult.filename}`)
      
      // Start analysis
      await analyzeImage(imageResult.filename)
      
    } catch (err) {
      setError(err.message)
      setActiveStep("idle")
    }
  }

  const analyzeImage = async (filename) => {
    try {
      setActiveStep("analyzing")
      let progressValue = 0
      
      // Start progress animation
      const progressInterval = setInterval(() => {
        progressValue += 5
        setProgress(Math.min(progressValue, 90))
      }, 200)

      // Get sensor reading
      const sensorResponse = await fetch(`${API_BASE_URL}/sensor/read`)
      if (!sensorResponse.ok) throw new Error('Failed to read sensor')
      const sensorResult = await sensorResponse.json()
      setSensorData(sensorResult.ethyleneLevel)

      // Get analysis results
      const analysisResponse = await fetch(`${API_BASE_URL}/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: filename,
          ethyleneLevel: sensorResult.ethyleneLevel
        })
      })

      clearInterval(progressInterval)
      setProgress(100)

      if (!analysisResponse.ok) throw new Error('Analysis failed')
      const analysisResult = await analysisResponse.json()
      
      setPrediction({
        freshness: analysisResult.freshness,
        confidence: analysisResult.confidence,
        ethyleneLevel: sensorResult.ethyleneLevel
      })
      
      setActiveStep("complete")
      
    } catch (err) {
      setError(err.message)
      setActiveStep("idle")
    }
  }

  const reset = () => {
    setActiveStep("idle")
    setImageData(null)
    setSensorData(null)
    setPrediction(null)
    setError(null)
    setProgress(0)
  }

  const getStatusColor = () => {
    if (error) return "bg-red-500"
    if (!isConnected) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
            <h1 className="text-xl font-semibold text-gray-900">
              Fruit Freshness Detector
            </h1>
          </div>
          <Settings className="w-6 h-6 text-gray-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        {/* Status Messages */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Image Display */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="aspect-square relative bg-gray-100">
            {imageData ? (
              <img 
                src={imageData} 
                alt="Captured fruit"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Camera className="w-20 h-20 text-gray-400 mb-2" />
                <p className="text-gray-500">Ready to capture</p>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {activeStep === "analyzing" && (
            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Analyzing...</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Results */}
          {prediction && (
            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Results</h2>
                <span className="text-sm text-gray-500">
                  Confidence: {prediction.confidence}%
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Freshness</div>
                  <div className="text-lg font-medium text-gray-900">
                    {prediction.freshness}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Ethylene Level</div>
                  <div className="text-lg font-medium text-gray-900">
                    {prediction.ethyleneLevel} ppm
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="p-4 border-t border-gray-100">
            {activeStep === "idle" && (
              <button
                onClick={startDetection}
                disabled={!isConnected}
                className="w-full bg-blue-500 text-white rounded-lg px-4 py-3 font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Detection
              </button>
            )}
            {activeStep === "complete" && (
              <button
                onClick={reset}
                className="w-full bg-gray-500 text-white rounded-lg px-4 py-3 font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                New Detection
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white border-t border-gray-200">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-4">
            <Home className="w-6 h-6 text-blue-500" />
            <BarChart className="w-6 h-6 text-gray-400" />
            <User className="w-6 h-6 text-gray-400" />
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default FruitDetectorApp