<template>
    <div class="container">
      <div class="row">
        <!-- 图片部分 -->
        <div class="col-md-8">
          <div class="image-placeholder">
            <!-- 大图占位符 -->
          </div>
          <div class="ratings">
            <!-- 星级评分 -->
            <div class="wrapper">
                <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= selectedRating }" @click="setRating(star)">★</span>
                <br/>
            </div>
            <div class="rating-details">
              <span>avarge score: {{ selectedRating }}</span>
            </div>
          </div>
        </div>
  
        <!-- 地图和按钮部分 -->
        <div class="col-md-4">
          <div class="map-placeholder">
            <!-- 地图占位符 -->
          </div>
          <div class="address-section">
            <h4>address</h4>
            <p>address detail</p>
            <p>address detail</p>
          </div>
          <div class="buttons">
            <button class="btn btn-join">JOIN NOW!!</button>
            <button class="btn btn-guide">GUIDE ME HERE!</button>
          </div>
        </div>
      </div>
  
      <div class="row comments-row">
        <!-- 左侧评论区 -->
        <div class="col-md-8">
          <div class="comments">
            <!-- 评论区 -->
            <div class="comment-row">
              <div class="comment-box">comment</div>
              <div class="comment-box">comment</div>
            </div>
            <div class="comment-row">
              <div class="comment-box">comment</div>
              <div class="comment-box">comment</div>
            </div>
            <div class="comment-row">
              <div class="comment-box">comment</div>
              <div class="comment-box">comment</div>
            </div>
          </div>
        </div>
  
        <!-- 右侧活动信息部分 -->
        <div class="col-md-4">
          <div class="active-info">
            <h2 class="active-title">active 1</h2>
            <p class="active-detail">
              active detailactive detailactive detailactive detailactive detailactive detailactive detailactive detailactive detailactive detailactive detailactive detailactive detailactive detail
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const selectedRating = ref(0);
  
  const setRating = (star: number) => {
    selectedRating.value = star;
  };
  </script>
  
  <style scoped>
  .container {
    padding: 10px; 
    font-family: Arial, sans-serif;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px; 
  }
  
  .col-md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  
  .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  
  .image-placeholder,
  .map-placeholder {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    height: 200px;
  }
  
  .ratings,
  .comments,
  .address-section,
  .buttons {
    margin-top: 5px; 
  }
  
  .wrapper {
    display: flex;
    align-items: center;
    gap: 5px; 
  }
  
  .star {
    cursor: pointer;
    color: #d8d8d8;
    font-size: 66px; 
  }
  
  .star:hover,
  .star:active,
  .star.filled {
    color: orange;
  }
  
  .comment-row {
    display: flex;
    justify-content: space-between;
    gap: 5px; 
    margin-bottom: 5px; 
  }
  
  .comment-box {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    height: 100px; 
    width: 48%; 
    text-align: center;
    line-height: 80px;
    position: relative; 
    top: -40px; 
  }
  
  .comments-row {
    margin-top: 5px; 
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  
  .btn {
    width: 48%;
    height: 50px;
    border-radius: 50%;
    border: none;
    font-size: 16px;
  }
  
  .btn-join {
    background-color: #f0a0a0;
  }
  
  .btn-guide {
    background-color: #a0a0f0;
  }
  
  .active-info {
    margin-top: 5px;
  }
  
  .active-title {
    font-size: 28px;
    margin-bottom: 5px; 
  }
  
  .active-detail {
    font-size: 14px;
    line-height: 1.5;
  }
  </style>
  