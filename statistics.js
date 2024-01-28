class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    calculateMean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    calculateMedian() {
      const sortedData = [...this.data].sort((a, b) => a - b);
      const midIndex = Math.floor(sortedData.length / 2);
      
      if (sortedData.length % 2 === 0) {
        return (sortedData[midIndex - 1] + sortedData[midIndex]) / 2;
      } else {
        return sortedData[midIndex];
      }
    }
  
    calculateMode() {
      const frequencyMap = new Map();
      
      this.data.forEach(value => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let mode;
      let maxFrequency = 0;
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          mode = value;
          maxFrequency = frequency;
        }
      });
  
      return mode;
    }
  

    // Calculating  measures of dispersion
    
    calculateRange() {
      const sortedData = [...this.data].sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    calculateVariance() {
      const mean = this.calculateMean();
      const sumSquaredDifferences = this.data.reduce((acc, value) => acc + Math.pow(value - mean, 2), 0);
      return sumSquaredDifferences / this.data.length;
    }
  
    calculateStandardDeviation() {
      return Math.sqrt(this.calculateVariance());
    }
  
    calculateInterquartileRange() {
      const sortedData = [...this.data].sort((a, b) => a - b);
      const lowerQuartileIndex = Math.floor(sortedData.length / 4);
      const upperQuartileIndex = Math.ceil((3 * sortedData.length) / 4);
      const lowerQuartile = sortedData[lowerQuartileIndex];
      const upperQuartile = sortedData[upperQuartileIndex];
      return upperQuartile - lowerQuartile;
    }
  
    calculateMeanAbsoluteDeviation() {
      const mean = this.calculateMean();
      const absoluteDeviations = this.data.map(value => Math.abs(value - mean));
      return absoluteDeviations.reduce((acc, value) => acc + value, 0) / this.data.length;
    }
  }
  
  // Data to be used
  const data = [40, 10, 70, 25, 85];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.calculateMean());
  console.log('Median:', stats.calculateMedian());
  console.log('Mode:', stats.calculateMode());
  console.log('Range:', stats.calculateRange());
  console.log('Variance:', stats.calculateVariance());
  console.log('Standard Deviation:', stats.calculateStandardDeviation());
  console.log('Interquartile Range:', stats.calculateInterquartileRange());
  console.log('Mean Absolute Deviation:', stats.calculateMeanAbsoluteDeviation());