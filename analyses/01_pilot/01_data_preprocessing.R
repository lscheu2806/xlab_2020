library(tidyverse)

raw_data = read_csv("01_pilot/data/01_raw_data.csv")
#head(raw_data)


raw_data %>% 
  # exclude answers that were given in less than 300ms
  filter(RT >= 300) %>%
  # select the relevant columns, dropping the rest
  select(submission_id,trial_number,scenario,predicate,sentence_frame,RT,response) %>%
  # write to csv file
  write_csv("01_pilot/data/02_clean_data.csv")

