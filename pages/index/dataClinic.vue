<template>
  <view class="content">
      <view class="table_list">
            <iv-table
        :columns="columns"
        :list="list"
        row-class-name="rowClassName"
      ></iv-table>
      </view>
    
  </view>
</template>
<script>
import ivTable from "@/components/table/table.vue";
export default {
  components: {
    ivTable,
  },
  data() {
    return {
      columns: [
        {
          title: "诊所名称",
          key: "name",
          $width: "105px",
          $height: "105px",
        },
        {
          title: "正畸案例",
          key: "orthodontics",
          $width: "60px",
        },
        {
          title: "正6案例",
          key: "Positive6",
          $width: "60px",
        },
        {
          title: "修复案例",
          key: "repair",
          $width: "60px",
        },
        {
          title: "种植案例",
          key: "plant",
          $width: "60px",
        },
      ],
      list: [
        {
          name: "深圳慧杰口腔门诊部",
          orthodontics: "42",
          Positive6: "22",
          repair: "43",
          plant: "35",
        },
        {
          name: "合肥天虹口腔",
           orthodontics: "42",
          Positive6: "22",
          repair: "43",
          plant: "35",
        },
        {
          name: "光泽肖超口腔诊所",
           orthodontics: "42",
          Positive6: "22",
          repair: "43",
          plant: "35",
        },
        {
          name: "颜氏牙科",
           orthodontics: "42",
          Positive6: "22",
          repair: "43",
          plant: "35",
        },
        {
          name: "唐山路北光明牙科诊所",
           orthodontics: "42",
          Positive6: "22",
          repair: "43",
          plant: "35",
        },
        {
          name: "萧县交通口腔诊所",
           orthodontics: "42",
          Positive6: "22",
          repair: "43",
          plant: "35",
        },
        {
          name: "深圳谢吉艳口腔诊所",
           orthodontics: "42",
          Positive6: "22",
          repair: "43",
          plant: "35",
        },
        {
          name: "深圳德艺口腔诊所",
           orthodontics: "42",
          Positive6: "22",
          repair: "43",
          plant: "35",
        },
      ],
    }
  },
};
</script>
<style  scoped>
.table_list{
    padding: 5px;
}
</style>
