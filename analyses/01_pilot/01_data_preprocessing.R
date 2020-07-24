library(tidyverse)

raw_data = read_csv("01_pilot/data/01_raw_data.csv")
#head(raw_data)


raw_data %>% 
  # exclude answers that were given in less than 300ms
  filter(RT >= 300) %>%
  # 