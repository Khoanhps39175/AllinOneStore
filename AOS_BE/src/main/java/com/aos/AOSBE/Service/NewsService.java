package com.aos.AOSBE.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.aos.AOSBE.Entity.*;
import com.aos.AOSBE.Repository.*;
import java.util.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
@Service
public class NewsService {
	@Autowired
    private NewsRepository newsRepository;

    public List<News> newsFindAll(int page, int size) {
    	Pageable pageable = PageRequest.of(page, size);
		return newsRepository.findAll(pageable).getContent();
    }
    public News newsSave(News news) {
        return newsRepository.save(news);
    }
    public Optional<News> newsFindById(int id) {
        return newsRepository.findById(id);
    }
    public void newsDeleteById(int id) {
        newsRepository.deleteById(id);
    }
}